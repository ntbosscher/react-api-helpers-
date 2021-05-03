import {Checkbox, FormControlLabel} from "@material-ui/core";
import { TFormContext } from "nate-react-api-helpers/lib/components";
import * as React from "react";
import { useContext } from "react";
import { TFormValue } from './TFormValue';

export function TCheckbox<T>(props: {
    obj: T
    objKey: keyof T;
    required?: boolean;
    label?: string;
    yesText?: string;
    noText?: string;
}) {
  const yesText = props.yesText || "Yes";
  const noText = props.noText || "No";

    return (
      <TFormValue objKey={props.objKey} label={props.label} displayValue={v => <>{v ? yesText : noText}</>}>
        {p => <FormControlLabel
            control={<Checkbox checked={!!p.initialValue} onChange={e => {
              p.onChange(e.target.checked)
            }} />}
            label={props.label}
        />}
      </TFormValue>
    )
}