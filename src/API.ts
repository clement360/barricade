/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGateInput = {
  id?: string | null,
  transmissionStatus: TransmissionStatus,
  gateStatus: GateStatus,
  _version?: number | null,
};

export enum TransmissionStatus {
  UNKNOWN = "UNKNOWN",
  LOCKED = "LOCKED",
  LOCKING = "LOCKING",
  UNLOCKED = "UNLOCKED",
  UNLOCKING = "UNLOCKING",
}


export enum GateStatus {
  UNKNOWN = "UNKNOWN",
  OPEN = "OPEN",
  OPENING = "OPENING",
  CLOSED = "CLOSED",
  CLOSING = "CLOSING",
}


export type ModelGateConditionInput = {
  transmissionStatus?: ModelTransmissionStatusInput | null,
  gateStatus?: ModelGateStatusInput | null,
  and?: Array< ModelGateConditionInput | null > | null,
  or?: Array< ModelGateConditionInput | null > | null,
  not?: ModelGateConditionInput | null,
};

export type ModelTransmissionStatusInput = {
  eq?: TransmissionStatus | null,
  ne?: TransmissionStatus | null,
};

export type ModelGateStatusInput = {
  eq?: GateStatus | null,
  ne?: GateStatus | null,
};

export type Gate = {
  __typename: "Gate",
  id: string,
  transmissionStatus: TransmissionStatus,
  gateStatus: GateStatus,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGateInput = {
  id: string,
  transmissionStatus?: TransmissionStatus | null,
  gateStatus?: GateStatus | null,
  _version?: number | null,
};

export type DeleteGateInput = {
  id: string,
  _version?: number | null,
};

export type ModelGateFilterInput = {
  id?: ModelIDInput | null,
  transmissionStatus?: ModelTransmissionStatusInput | null,
  gateStatus?: ModelGateStatusInput | null,
  and?: Array< ModelGateFilterInput | null > | null,
  or?: Array< ModelGateFilterInput | null > | null,
  not?: ModelGateFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelGateConnection = {
  __typename: "ModelGateConnection",
  items?:  Array<Gate | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateGateMutationVariables = {
  input: CreateGateInput,
  condition?: ModelGateConditionInput | null,
};

export type CreateGateMutation = {
  createGate?:  {
    __typename: "Gate",
    id: string,
    transmissionStatus: TransmissionStatus,
    gateStatus: GateStatus,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGateMutationVariables = {
  input: UpdateGateInput,
  condition?: ModelGateConditionInput | null,
};

export type UpdateGateMutation = {
  updateGate?:  {
    __typename: "Gate",
    id: string,
    transmissionStatus: TransmissionStatus,
    gateStatus: GateStatus,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGateMutationVariables = {
  input: DeleteGateInput,
  condition?: ModelGateConditionInput | null,
};

export type DeleteGateMutation = {
  deleteGate?:  {
    __typename: "Gate",
    id: string,
    transmissionStatus: TransmissionStatus,
    gateStatus: GateStatus,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SyncGatesQueryVariables = {
  filter?: ModelGateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncGatesQuery = {
  syncGates?:  {
    __typename: "ModelGateConnection",
    items?:  Array< {
      __typename: "Gate",
      id: string,
      transmissionStatus: TransmissionStatus,
      gateStatus: GateStatus,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetGateQueryVariables = {
  id: string,
};

export type GetGateQuery = {
  getGate?:  {
    __typename: "Gate",
    id: string,
    transmissionStatus: TransmissionStatus,
    gateStatus: GateStatus,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGatesQueryVariables = {
  filter?: ModelGateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGatesQuery = {
  listGates?:  {
    __typename: "ModelGateConnection",
    items?:  Array< {
      __typename: "Gate",
      id: string,
      transmissionStatus: TransmissionStatus,
      gateStatus: GateStatus,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateGateSubscription = {
  onCreateGate?:  {
    __typename: "Gate",
    id: string,
    transmissionStatus: TransmissionStatus,
    gateStatus: GateStatus,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGateSubscription = {
  onUpdateGate?:  {
    __typename: "Gate",
    id: string,
    transmissionStatus: TransmissionStatus,
    gateStatus: GateStatus,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGateSubscription = {
  onDeleteGate?:  {
    __typename: "Gate",
    id: string,
    transmissionStatus: TransmissionStatus,
    gateStatus: GateStatus,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
