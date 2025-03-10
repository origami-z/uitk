import {
  Button,
  FlexLayout,
  VALIDATION_NAMED_STATUS,
  StatusIndicator,
} from "@salt-ds/core";
import { SearchIcon } from "@salt-ds/icons";
import { HTMLAttributes } from "react";

export const PreviewView = (
  props: Omit<HTMLAttributes<HTMLDivElement>, "style"> & {
    /** Style may contain custom CSS var */
    style?: any;
  }
) => {
  return (
    <FlexLayout align="center" {...props}>
      <FlexLayout>
        <Button variant="cta">
          <SearchIcon size={12} />
          {` CTA Button`}
        </Button>
        <Button variant="primary">
          <SearchIcon size={12} />
          {` Primary Button`}
        </Button>
        <Button variant="secondary">
          <SearchIcon size={12} />
          {` Secondary Button`}
        </Button>
      </FlexLayout>
      <FlexLayout>
        {VALIDATION_NAMED_STATUS.map((status, index) => (
          <StatusIndicator status={status} key={index} />
        ))}
      </FlexLayout>
    </FlexLayout>
  );
};
