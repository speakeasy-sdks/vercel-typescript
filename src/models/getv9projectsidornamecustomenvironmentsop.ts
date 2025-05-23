/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type GetV9ProjectsIdOrNameCustomEnvironmentsRequest = {
  /**
   * The unique project identifier or the project name
   */
  idOrName: string;
  /**
   * Fetch custom environments for a specific git branch
   */
  gitBranch?: string | undefined;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
};

/**
 * The maximum number of custom environments allowed either by the team's plan type or a custom override.
 */
export type AccountLimit = {
  total: number;
};

export type GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments = {};

export type GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody = {
  /**
   * The maximum number of custom environments allowed either by the team's plan type or a custom override.
   */
  accountLimit: AccountLimit;
  environments: Array<GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments>;
};

/** @internal */
export const GetV9ProjectsIdOrNameCustomEnvironmentsRequest$inboundSchema:
  z.ZodType<
    GetV9ProjectsIdOrNameCustomEnvironmentsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    idOrName: z.string(),
    gitBranch: z.string().optional(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
  });

/** @internal */
export type GetV9ProjectsIdOrNameCustomEnvironmentsRequest$Outbound = {
  idOrName: string;
  gitBranch?: string | undefined;
  teamId?: string | undefined;
  slug?: string | undefined;
};

/** @internal */
export const GetV9ProjectsIdOrNameCustomEnvironmentsRequest$outboundSchema:
  z.ZodType<
    GetV9ProjectsIdOrNameCustomEnvironmentsRequest$Outbound,
    z.ZodTypeDef,
    GetV9ProjectsIdOrNameCustomEnvironmentsRequest
  > = z.object({
    idOrName: z.string(),
    gitBranch: z.string().optional(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV9ProjectsIdOrNameCustomEnvironmentsRequest$ {
  /** @deprecated use `GetV9ProjectsIdOrNameCustomEnvironmentsRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV9ProjectsIdOrNameCustomEnvironmentsRequest$inboundSchema;
  /** @deprecated use `GetV9ProjectsIdOrNameCustomEnvironmentsRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV9ProjectsIdOrNameCustomEnvironmentsRequest$outboundSchema;
  /** @deprecated use `GetV9ProjectsIdOrNameCustomEnvironmentsRequest$Outbound` instead. */
  export type Outbound =
    GetV9ProjectsIdOrNameCustomEnvironmentsRequest$Outbound;
}

export function getV9ProjectsIdOrNameCustomEnvironmentsRequestToJSON(
  getV9ProjectsIdOrNameCustomEnvironmentsRequest:
    GetV9ProjectsIdOrNameCustomEnvironmentsRequest,
): string {
  return JSON.stringify(
    GetV9ProjectsIdOrNameCustomEnvironmentsRequest$outboundSchema.parse(
      getV9ProjectsIdOrNameCustomEnvironmentsRequest,
    ),
  );
}

export function getV9ProjectsIdOrNameCustomEnvironmentsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV9ProjectsIdOrNameCustomEnvironmentsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV9ProjectsIdOrNameCustomEnvironmentsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV9ProjectsIdOrNameCustomEnvironmentsRequest' from JSON`,
  );
}

/** @internal */
export const AccountLimit$inboundSchema: z.ZodType<
  AccountLimit,
  z.ZodTypeDef,
  unknown
> = z.object({
  total: z.number(),
});

/** @internal */
export type AccountLimit$Outbound = {
  total: number;
};

/** @internal */
export const AccountLimit$outboundSchema: z.ZodType<
  AccountLimit$Outbound,
  z.ZodTypeDef,
  AccountLimit
> = z.object({
  total: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountLimit$ {
  /** @deprecated use `AccountLimit$inboundSchema` instead. */
  export const inboundSchema = AccountLimit$inboundSchema;
  /** @deprecated use `AccountLimit$outboundSchema` instead. */
  export const outboundSchema = AccountLimit$outboundSchema;
  /** @deprecated use `AccountLimit$Outbound` instead. */
  export type Outbound = AccountLimit$Outbound;
}

export function accountLimitToJSON(accountLimit: AccountLimit): string {
  return JSON.stringify(AccountLimit$outboundSchema.parse(accountLimit));
}

export function accountLimitFromJSON(
  jsonString: string,
): SafeParseResult<AccountLimit, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountLimit$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountLimit' from JSON`,
  );
}

/** @internal */
export const GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments$inboundSchema:
  z.ZodType<
    GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments$Outbound = {};

/** @internal */
export const GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments$outboundSchema:
  z.ZodType<
    GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments$Outbound,
    z.ZodTypeDef,
    GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments$ {
  /** @deprecated use `GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments$inboundSchema` instead. */
  export const inboundSchema =
    GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments$inboundSchema;
  /** @deprecated use `GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments$outboundSchema` instead. */
  export const outboundSchema =
    GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments$outboundSchema;
  /** @deprecated use `GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments$Outbound` instead. */
  export type Outbound =
    GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments$Outbound;
}

export function getV9ProjectsIdOrNameCustomEnvironmentsEnvironmentsToJSON(
  getV9ProjectsIdOrNameCustomEnvironmentsEnvironments:
    GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments,
): string {
  return JSON.stringify(
    GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments$outboundSchema.parse(
      getV9ProjectsIdOrNameCustomEnvironmentsEnvironments,
    ),
  );
}

export function getV9ProjectsIdOrNameCustomEnvironmentsEnvironmentsFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments' from JSON`,
  );
}

/** @internal */
export const GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody$inboundSchema:
  z.ZodType<
    GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    accountLimit: z.lazy(() => AccountLimit$inboundSchema),
    environments: z.array(
      z.lazy(() =>
        GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments$inboundSchema
      ),
    ),
  });

/** @internal */
export type GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody$Outbound = {
  accountLimit: AccountLimit$Outbound;
  environments: Array<
    GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments$Outbound
  >;
};

/** @internal */
export const GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody$outboundSchema:
  z.ZodType<
    GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody$Outbound,
    z.ZodTypeDef,
    GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody
  > = z.object({
    accountLimit: z.lazy(() => AccountLimit$outboundSchema),
    environments: z.array(
      z.lazy(() =>
        GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments$outboundSchema
      ),
    ),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody$ {
  /** @deprecated use `GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody$inboundSchema;
  /** @deprecated use `GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody$outboundSchema;
  /** @deprecated use `GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody$Outbound` instead. */
  export type Outbound =
    GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody$Outbound;
}

export function getV9ProjectsIdOrNameCustomEnvironmentsResponseBodyToJSON(
  getV9ProjectsIdOrNameCustomEnvironmentsResponseBody:
    GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody,
): string {
  return JSON.stringify(
    GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody$outboundSchema.parse(
      getV9ProjectsIdOrNameCustomEnvironmentsResponseBody,
    ),
  );
}

export function getV9ProjectsIdOrNameCustomEnvironmentsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody' from JSON`,
  );
}
