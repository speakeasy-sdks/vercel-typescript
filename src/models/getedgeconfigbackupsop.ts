/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type GetEdgeConfigBackupsRequest = {
  edgeConfigId: string;
  next?: string | undefined;
  limit?: number | undefined;
  metadata?: string | undefined;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
};

export type GetEdgeConfigBackupsMetadata = {
  updatedAt?: string | undefined;
  updatedBy?: string | undefined;
  itemsCount?: number | undefined;
  itemsBytes?: number | undefined;
};

export type Backups = {
  metadata?: GetEdgeConfigBackupsMetadata | undefined;
  id: string;
  lastModified: number;
};

export type GetEdgeConfigBackupsPagination = {
  hasNext: boolean;
  next?: string | undefined;
};

export type GetEdgeConfigBackupsResponseBody = {
  backups: Array<Backups>;
  pagination: GetEdgeConfigBackupsPagination;
};

/** @internal */
export const GetEdgeConfigBackupsRequest$inboundSchema: z.ZodType<
  GetEdgeConfigBackupsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  edgeConfigId: z.string(),
  next: z.string().optional(),
  limit: z.number().optional(),
  metadata: z.string().optional(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/** @internal */
export type GetEdgeConfigBackupsRequest$Outbound = {
  edgeConfigId: string;
  next?: string | undefined;
  limit?: number | undefined;
  metadata?: string | undefined;
  teamId?: string | undefined;
  slug?: string | undefined;
};

/** @internal */
export const GetEdgeConfigBackupsRequest$outboundSchema: z.ZodType<
  GetEdgeConfigBackupsRequest$Outbound,
  z.ZodTypeDef,
  GetEdgeConfigBackupsRequest
> = z.object({
  edgeConfigId: z.string(),
  next: z.string().optional(),
  limit: z.number().optional(),
  metadata: z.string().optional(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEdgeConfigBackupsRequest$ {
  /** @deprecated use `GetEdgeConfigBackupsRequest$inboundSchema` instead. */
  export const inboundSchema = GetEdgeConfigBackupsRequest$inboundSchema;
  /** @deprecated use `GetEdgeConfigBackupsRequest$outboundSchema` instead. */
  export const outboundSchema = GetEdgeConfigBackupsRequest$outboundSchema;
  /** @deprecated use `GetEdgeConfigBackupsRequest$Outbound` instead. */
  export type Outbound = GetEdgeConfigBackupsRequest$Outbound;
}

export function getEdgeConfigBackupsRequestToJSON(
  getEdgeConfigBackupsRequest: GetEdgeConfigBackupsRequest,
): string {
  return JSON.stringify(
    GetEdgeConfigBackupsRequest$outboundSchema.parse(
      getEdgeConfigBackupsRequest,
    ),
  );
}

export function getEdgeConfigBackupsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetEdgeConfigBackupsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetEdgeConfigBackupsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetEdgeConfigBackupsRequest' from JSON`,
  );
}

/** @internal */
export const GetEdgeConfigBackupsMetadata$inboundSchema: z.ZodType<
  GetEdgeConfigBackupsMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  updatedAt: z.string().optional(),
  updatedBy: z.string().optional(),
  itemsCount: z.number().optional(),
  itemsBytes: z.number().optional(),
});

/** @internal */
export type GetEdgeConfigBackupsMetadata$Outbound = {
  updatedAt?: string | undefined;
  updatedBy?: string | undefined;
  itemsCount?: number | undefined;
  itemsBytes?: number | undefined;
};

/** @internal */
export const GetEdgeConfigBackupsMetadata$outboundSchema: z.ZodType<
  GetEdgeConfigBackupsMetadata$Outbound,
  z.ZodTypeDef,
  GetEdgeConfigBackupsMetadata
> = z.object({
  updatedAt: z.string().optional(),
  updatedBy: z.string().optional(),
  itemsCount: z.number().optional(),
  itemsBytes: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEdgeConfigBackupsMetadata$ {
  /** @deprecated use `GetEdgeConfigBackupsMetadata$inboundSchema` instead. */
  export const inboundSchema = GetEdgeConfigBackupsMetadata$inboundSchema;
  /** @deprecated use `GetEdgeConfigBackupsMetadata$outboundSchema` instead. */
  export const outboundSchema = GetEdgeConfigBackupsMetadata$outboundSchema;
  /** @deprecated use `GetEdgeConfigBackupsMetadata$Outbound` instead. */
  export type Outbound = GetEdgeConfigBackupsMetadata$Outbound;
}

export function getEdgeConfigBackupsMetadataToJSON(
  getEdgeConfigBackupsMetadata: GetEdgeConfigBackupsMetadata,
): string {
  return JSON.stringify(
    GetEdgeConfigBackupsMetadata$outboundSchema.parse(
      getEdgeConfigBackupsMetadata,
    ),
  );
}

export function getEdgeConfigBackupsMetadataFromJSON(
  jsonString: string,
): SafeParseResult<GetEdgeConfigBackupsMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetEdgeConfigBackupsMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetEdgeConfigBackupsMetadata' from JSON`,
  );
}

/** @internal */
export const Backups$inboundSchema: z.ZodType<Backups, z.ZodTypeDef, unknown> =
  z.object({
    metadata: z.lazy(() => GetEdgeConfigBackupsMetadata$inboundSchema)
      .optional(),
    id: z.string(),
    lastModified: z.number(),
  });

/** @internal */
export type Backups$Outbound = {
  metadata?: GetEdgeConfigBackupsMetadata$Outbound | undefined;
  id: string;
  lastModified: number;
};

/** @internal */
export const Backups$outboundSchema: z.ZodType<
  Backups$Outbound,
  z.ZodTypeDef,
  Backups
> = z.object({
  metadata: z.lazy(() => GetEdgeConfigBackupsMetadata$outboundSchema)
    .optional(),
  id: z.string(),
  lastModified: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Backups$ {
  /** @deprecated use `Backups$inboundSchema` instead. */
  export const inboundSchema = Backups$inboundSchema;
  /** @deprecated use `Backups$outboundSchema` instead. */
  export const outboundSchema = Backups$outboundSchema;
  /** @deprecated use `Backups$Outbound` instead. */
  export type Outbound = Backups$Outbound;
}

export function backupsToJSON(backups: Backups): string {
  return JSON.stringify(Backups$outboundSchema.parse(backups));
}

export function backupsFromJSON(
  jsonString: string,
): SafeParseResult<Backups, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Backups$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Backups' from JSON`,
  );
}

/** @internal */
export const GetEdgeConfigBackupsPagination$inboundSchema: z.ZodType<
  GetEdgeConfigBackupsPagination,
  z.ZodTypeDef,
  unknown
> = z.object({
  hasNext: z.boolean(),
  next: z.string().optional(),
});

/** @internal */
export type GetEdgeConfigBackupsPagination$Outbound = {
  hasNext: boolean;
  next?: string | undefined;
};

/** @internal */
export const GetEdgeConfigBackupsPagination$outboundSchema: z.ZodType<
  GetEdgeConfigBackupsPagination$Outbound,
  z.ZodTypeDef,
  GetEdgeConfigBackupsPagination
> = z.object({
  hasNext: z.boolean(),
  next: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEdgeConfigBackupsPagination$ {
  /** @deprecated use `GetEdgeConfigBackupsPagination$inboundSchema` instead. */
  export const inboundSchema = GetEdgeConfigBackupsPagination$inboundSchema;
  /** @deprecated use `GetEdgeConfigBackupsPagination$outboundSchema` instead. */
  export const outboundSchema = GetEdgeConfigBackupsPagination$outboundSchema;
  /** @deprecated use `GetEdgeConfigBackupsPagination$Outbound` instead. */
  export type Outbound = GetEdgeConfigBackupsPagination$Outbound;
}

export function getEdgeConfigBackupsPaginationToJSON(
  getEdgeConfigBackupsPagination: GetEdgeConfigBackupsPagination,
): string {
  return JSON.stringify(
    GetEdgeConfigBackupsPagination$outboundSchema.parse(
      getEdgeConfigBackupsPagination,
    ),
  );
}

export function getEdgeConfigBackupsPaginationFromJSON(
  jsonString: string,
): SafeParseResult<GetEdgeConfigBackupsPagination, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetEdgeConfigBackupsPagination$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetEdgeConfigBackupsPagination' from JSON`,
  );
}

/** @internal */
export const GetEdgeConfigBackupsResponseBody$inboundSchema: z.ZodType<
  GetEdgeConfigBackupsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  backups: z.array(z.lazy(() => Backups$inboundSchema)),
  pagination: z.lazy(() => GetEdgeConfigBackupsPagination$inboundSchema),
});

/** @internal */
export type GetEdgeConfigBackupsResponseBody$Outbound = {
  backups: Array<Backups$Outbound>;
  pagination: GetEdgeConfigBackupsPagination$Outbound;
};

/** @internal */
export const GetEdgeConfigBackupsResponseBody$outboundSchema: z.ZodType<
  GetEdgeConfigBackupsResponseBody$Outbound,
  z.ZodTypeDef,
  GetEdgeConfigBackupsResponseBody
> = z.object({
  backups: z.array(z.lazy(() => Backups$outboundSchema)),
  pagination: z.lazy(() => GetEdgeConfigBackupsPagination$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEdgeConfigBackupsResponseBody$ {
  /** @deprecated use `GetEdgeConfigBackupsResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetEdgeConfigBackupsResponseBody$inboundSchema;
  /** @deprecated use `GetEdgeConfigBackupsResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetEdgeConfigBackupsResponseBody$outboundSchema;
  /** @deprecated use `GetEdgeConfigBackupsResponseBody$Outbound` instead. */
  export type Outbound = GetEdgeConfigBackupsResponseBody$Outbound;
}

export function getEdgeConfigBackupsResponseBodyToJSON(
  getEdgeConfigBackupsResponseBody: GetEdgeConfigBackupsResponseBody,
): string {
  return JSON.stringify(
    GetEdgeConfigBackupsResponseBody$outboundSchema.parse(
      getEdgeConfigBackupsResponseBody,
    ),
  );
}

export function getEdgeConfigBackupsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetEdgeConfigBackupsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetEdgeConfigBackupsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetEdgeConfigBackupsResponseBody' from JSON`,
  );
}
