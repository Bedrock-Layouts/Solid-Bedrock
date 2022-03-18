import { ArgType } from "doc-site/types/argType";
import { For, JSX, JSXElement, Match, Switch } from "solid-js";
import { styled } from "solid-styled-components";

import { PadBox, Stack, createContainerQuery } from "../../packages/solid/src";

const Select = styled.select`
  appearance: none;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid gray;
  border-radius: var(--radius-2);
  cursor: pointer;
  background-color: #fff;
  min-width: var(--size-content-1);
  max-width: var(--size-content-2);
  padding: var(--space-sm);
`;

const HeaderRow = styled("tr")`
  text-align: left;
`;

const BodyRow = styled("tr")`
  --border-style: 1px solid var(--gray-3);
  > td {
    border-top: var(--border-style);
    border-bottom: var(--border-style);
    padding: 1.5rem 1rem;
  }
  > :first-child {
    border-left: var(--border-style);
    border-top-left-radius: var(--radius-2);
    border-bottom-left-radius: var(--radius-2);
  }
  > :last-child {
    border-right: var(--border-style);
    border-top-right-radius: var(--radius-2);
    border-bottom-right-radius: var(--radius-2);
  }
`;

function HeadingCell(props: JSX.DOMAttributes<"th">) {
  return <PadBox as="th" padding="lg" {...props} />;
}

function BodyCell(props: JSX.DOMAttributes<"td">) {
  return <PadBox as="td" padding={["lgXl", "lg"]} {...props} />;
}

function SelectInput(props: {
  name: string;
  options: string[];
  initialValue: string;
  onChange?: (params: { propName: string; value: string }) => void;
}) {
  return (
    <Select
      name={props.name}
      onChange={(e) =>
        props.onChange?.({
          propName: props.name,
          value: e.currentTarget?.value,
        })
      }
    >
      <For each={props.options}>
        {(optionValue) => (
          <option
            selected={optionValue === props.initialValue}
            value={optionValue}
          >
            {optionValue}
          </option>
        )}
      </For>
    </Select>
  );
}

export function ArgsTable(props: {
  args: ArgType;
  onChange?: (params: { propName: string; value: string }) => void;
}): JSXElement {
  const [shouldSwitch, ref] = createContainerQuery(600);

  return (
    <Switch>
      <Match when={shouldSwitch() === true}>
        <Stack
          ref={ref}
          as="dl"
          gutter="md"
          style="border:1px solid var(--gray-3); padding:1rem;"
        >
          <For each={Object.entries(props.args)}>
            {([propName, details]) => (
              <>
                <dt>
                  <strong>{propName}</strong>
                </dt>
                <dd>{details.description}</dd>
                <dd>{details.summary}</dd>
                <dd>
                  <strong>default value:</strong> {details.defaultValue ?? "-"}
                </dd>
                <dd>
                  <Switch>
                    <Match when={details.control === "text"}>
                      <input
                        name={propName}
                        value={details.initialValue}
                        onChange={(e) =>
                          props.onChange?.({
                            propName,
                            value: e.currentTarget.value,
                          })
                        }
                      />
                    </Match>
                    <Match when={details.control === "select"}>
                      <SelectInput
                        name={propName}
                        initialValue={details.initialValue}
                        options={
                          details.control === "select" ? details.options : []
                        }
                        onChange={props.onChange}
                      />
                    </Match>
                  </Switch>
                </dd>
              </>
            )}
          </For>
        </Stack>
      </Match>
      <Match when={shouldSwitch() === false}>
        <table ref={ref}>
          <thead>
            <HeaderRow>
              <HeadingCell>Name</HeadingCell>
              <HeadingCell>Description</HeadingCell>
              <HeadingCell>Default</HeadingCell>
              <HeadingCell>Control</HeadingCell>
            </HeaderRow>
          </thead>
          <tbody>
            <For each={Object.entries(props.args)}>
              {([propName, details]) => (
                <BodyRow>
                  <BodyCell>
                    <strong>{propName}</strong>
                  </BodyCell>
                  <BodyCell>
                    {details.description} {details.summary}
                  </BodyCell>
                  <BodyCell>{details.defaultValue ?? "-"}</BodyCell>
                  <BodyCell>
                    <Switch>
                      <Match when={details.control === "text"}>
                        <input
                          name={propName}
                          value={details.initialValue}
                          onChange={(e) =>
                            props.onChange?.({
                              propName,
                              value: e.currentTarget.value,
                            })
                          }
                        />
                      </Match>
                      <Match when={details.control === "select"}>
                        <SelectInput
                          name={propName}
                          initialValue={details.initialValue}
                          options={
                            details.control === "select" ? details.options : []
                          }
                          onChange={props.onChange}
                        />
                      </Match>
                    </Switch>
                  </BodyCell>
                </BodyRow>
              )}
            </For>
          </tbody>
        </table>
      </Match>
    </Switch>
  );
}
