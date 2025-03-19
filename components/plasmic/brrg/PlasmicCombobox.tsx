// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: u4Y4MGpSRpZo7PLABQqvDf
// Component: tj-NT_gEqF9k

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { BaseComboBox } from "@plasmicpkgs/react-aria/skinny/registerComboBox";
import Label from "../../Label"; // plasmic-import: 01_VcZ5aG1Lf/component
import { BaseInput } from "@plasmicpkgs/react-aria/skinny/registerInput";
import { inputHelpers as BaseInput_Helpers } from "@plasmicpkgs/react-aria/skinny/registerInput";
import { BaseButton } from "@plasmicpkgs/react-aria/skinny/registerButton";
import Description from "../../Description"; // plasmic-import: 4IMNElDra6N-/component
import MenuPopover from "../../MenuPopover"; // plasmic-import: 9ilINPFF9gAE/component
import MenuItem from "../../MenuItem"; // plasmic-import: xSGMaPPAL8id/component
import MenuSection from "../../MenuSection"; // plasmic-import: sQdZVm3wcBuN/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_tailwind_3_4_colors_css from "../library_tailwind_3_4_color_tokens/plasmic.module.css"; // plasmic-import: 5ZtnypMovRHeeP3YTdPCYL/projectcss
import plasmic_library_tailwind_3_4_number_tokens_css from "../library_tailwind_3_4_number_tokens/plasmic.module.css"; // plasmic-import: 4vjRXvnb4XuY6J15w9oRcQ/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: u4Y4MGpSRpZo7PLABQqvDf/projectcss
import sty from "./PlasmicCombobox.module.css"; // plasmic-import: tj-NT_gEqF9k/css

import ChevronDownIcon from "./icons/PlasmicIcon__ChevronDown"; // plasmic-import: -Byi7mH_H7-T/icon

createPlasmicElementProxy;

export type PlasmicCombobox__VariantMembers = {
  type: "soft" | "plain";
};
export type PlasmicCombobox__VariantsArgs = {
  type?: SingleChoiceArg<"soft" | "plain">;
};
type VariantPropType = keyof PlasmicCombobox__VariantsArgs;
export const PlasmicCombobox__VariantProps = new Array<VariantPropType>("type");

export type PlasmicCombobox__ArgsType = {
  placeholder?: string;
  showLabel?: boolean;
  showDescription?: boolean;
  onChange?: (val: string) => void;
  initialSelectedKey?: "Dynamic options";
  autoFocus?: boolean;
  inputDisplayValue?: string;
  disabled?: boolean;
  ariaLabel?: string;
  readOnly?: boolean;
  label?: React.ReactNode;
  description?: React.ReactNode;
  items?: React.ReactNode;
};
type ArgPropType = keyof PlasmicCombobox__ArgsType;
export const PlasmicCombobox__ArgProps = new Array<ArgPropType>(
  "placeholder",
  "showLabel",
  "showDescription",
  "onChange",
  "initialSelectedKey",
  "autoFocus",
  "inputDisplayValue",
  "disabled",
  "ariaLabel",
  "readOnly",
  "label",
  "description",
  "items"
);

export type PlasmicCombobox__OverridesType = {
  ariaComboBox?: Flex__<typeof BaseComboBox>;
  label?: Flex__<typeof Label>;
  ariaInput?: Flex__<typeof BaseInput>;
  ariaButton?: Flex__<typeof BaseButton>;
  svg?: Flex__<"svg">;
  description?: Flex__<typeof Description>;
  menuPopover?: Flex__<typeof MenuPopover>;
};

export interface DefaultComboboxProps {
  placeholder?: string;
  showLabel?: boolean;
  showDescription?: boolean;
  onChange?: (val: string) => void;
  initialSelectedKey?: "Dynamic options";
  autoFocus?: boolean;
  inputDisplayValue?: string;
  disabled?: boolean;
  ariaLabel?: string;
  readOnly?: boolean;
  label?: React.ReactNode;
  description?: React.ReactNode;
  items?: React.ReactNode;
  type?: SingleChoiceArg<"soft" | "plain">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCombobox__RenderFunc(props: {
  variants: PlasmicCombobox__VariantsArgs;
  args: PlasmicCombobox__ArgsType;
  overrides: PlasmicCombobox__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          placeholder: "Select an item",
          showLabel: true,
          showDescription: false
        },
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "ariaComboBox.isOpen",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "ariaComboBox.selectedValue",
        type: "readonly",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props["initialSelectedKey"],

        onChangeProp: "onChange"
      },
      {
        path: "type",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.type
      },
      {
        path: "ariaInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", BaseInput_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const [$ccVariants, setDollarCcVariants] = React.useState<
    Record<string, boolean>
  >({
    disabled: false
  });
  const updateVariant = React.useCallback(
    (changes: Record<string, boolean>) => {
      setDollarCcVariants(prev => {
        if (!Object.keys(changes).some(k => prev[k] !== changes[k])) {
          return prev;
        }
        return { ...prev, ...changes };
      });
    },
    []
  );

  return (
    <BaseComboBox
      data-plasmic-name={"ariaComboBox"}
      data-plasmic-override={overrides.ariaComboBox}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      aria-label={args.ariaLabel}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_tailwind_3_4_colors_css.plasmic_tokens,
        plasmic_library_tailwind_3_4_number_tokens_css.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.ariaComboBox,
        {
          [sty.ariaComboBoxtype_plain]: hasVariant($state, "type", "plain"),
          [sty.ariaComboBoxtype_soft]: hasVariant($state, "type", "soft")
        }
      )}
      defaultSelectedKey={args.initialSelectedKey}
      isDisabled={args.disabled}
      isOpen={generateStateValueProp($state, ["ariaComboBox", "isOpen"])}
      onOpenChange={async (...eventArgs: any) => {
        generateStateOnChangeProp($state, ["ariaComboBox", "isOpen"]).apply(
          null,
          eventArgs
        );
      }}
      onSelectionChange={async (...eventArgs: any) => {
        generateStateOnChangeProp($state, [
          "ariaComboBox",
          "selectedValue"
        ]).apply(null, eventArgs);
      }}
      plasmicUpdateVariant={updateVariant}
      selectedKey={generateStateValueProp($state, [
        "ariaComboBox",
        "selectedValue"
      ])}
    >
      {$props.showLabel ? (
        <Label
          data-plasmic-name={"label"}
          data-plasmic-override={overrides.label}
          className={classNames("__wab_instance", sty.label)}
        >
          {renderPlasmicSlot({
            defaultContents: "Label",
            value: args.label
          })}
        </Label>
      ) : null}
      <div className={classNames(projectcss.all, sty.freeBox__unGv7)}>
        {(() => {
          const child$Props = {
            className: classNames("__wab_instance", sty.ariaInput),
            onChange: async (...eventArgs: any) => {
              generateStateOnChangePropForCodeComponents(
                $state,
                "value",
                ["ariaInput", "value"],
                BaseInput_Helpers
              ).apply(null, eventArgs);
            },
            placeholder: args.placeholder,
            value: generateStateValueProp($state, ["ariaInput", "value"])
          };
          initializeCodeComponentStates(
            $state,
            [
              {
                name: "value",
                plasmicStateName: "ariaInput.value"
              }
            ],
            [],
            BaseInput_Helpers ?? {},
            child$Props
          );

          return (
            <BaseInput
              data-plasmic-name={"ariaInput"}
              data-plasmic-override={overrides.ariaInput}
              {...child$Props}
            />
          );
        })()}
        <BaseButton
          data-plasmic-name={"ariaButton"}
          data-plasmic-override={overrides.ariaButton}
          className={classNames("__wab_instance", sty.ariaButton)}
        >
          <div className={classNames(projectcss.all, sty.freeBox___4BN0I)}>
            <ChevronDownIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          </div>
        </BaseButton>
      </div>
      {$props.showDescription ? (
        <Description
          data-plasmic-name={"description"}
          data-plasmic-override={overrides.description}
          className={classNames("__wab_instance", sty.description)}
        >
          {renderPlasmicSlot({
            defaultContents: "Description...",
            value: args.description
          })}
        </Description>
      ) : null}
      <MenuPopover
        data-plasmic-name={"menuPopover"}
        data-plasmic-override={overrides.menuPopover}
        menuItems={renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <MenuItem label={"Item 1"} value={"item1"} />

              <MenuItem label={"Item 2"} value={"item2"} />

              <MenuItem label={"Item 3"} value={"item3"} />

              <MenuSection
                header={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__s5Ybq
                    )}
                  >
                    {"Section"}
                  </div>
                }
                items={
                  <React.Fragment>
                    <MenuItem
                      label={"Section Item 1"}
                      value={"section-item-1"}
                    />

                    <MenuItem
                      label={"Section Item 2"}
                      value={"section-item-2"}
                    />

                    <MenuItem
                      label={"Section Item 3"}
                      value={"section-item-3"}
                    />
                  </React.Fragment>
                }
              />
            </React.Fragment>
          ),
          value: args.items
        })}
        offset={2}
      />
    </BaseComboBox>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  ariaComboBox: [
    "ariaComboBox",
    "label",
    "ariaInput",
    "ariaButton",
    "svg",
    "description",
    "menuPopover"
  ],
  label: ["label"],
  ariaInput: ["ariaInput"],
  ariaButton: ["ariaButton", "svg"],
  svg: ["svg"],
  description: ["description"],
  menuPopover: ["menuPopover"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  ariaComboBox: typeof BaseComboBox;
  label: typeof Label;
  ariaInput: typeof BaseInput;
  ariaButton: typeof BaseButton;
  svg: "svg";
  description: typeof Description;
  menuPopover: typeof MenuPopover;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCombobox__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCombobox__VariantsArgs;
    args?: PlasmicCombobox__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCombobox__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCombobox__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCombobox__ArgProps,
          internalVariantPropNames: PlasmicCombobox__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCombobox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "ariaComboBox") {
    func.displayName = "PlasmicCombobox";
  } else {
    func.displayName = `PlasmicCombobox.${nodeName}`;
  }
  return func;
}

export const PlasmicCombobox = Object.assign(
  // Top-level PlasmicCombobox renders the root element
  makeNodeComponent("ariaComboBox"),
  {
    // Helper components rendering sub-elements
    label: makeNodeComponent("label"),
    ariaInput: makeNodeComponent("ariaInput"),
    ariaButton: makeNodeComponent("ariaButton"),
    svg: makeNodeComponent("svg"),
    description: makeNodeComponent("description"),
    menuPopover: makeNodeComponent("menuPopover"),

    // Metadata about props expected for PlasmicCombobox
    internalVariantProps: PlasmicCombobox__VariantProps,
    internalArgProps: PlasmicCombobox__ArgProps
  }
);

export default PlasmicCombobox;
/* prettier-ignore-end */
