import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum TransmissionStatus {
  UNKNOWN = "UNKNOWN",
  LOCKED = "LOCKED",
  LOCKING = "LOCKING",
  UNLOCKED = "UNLOCKED",
  UNLOCKING = "UNLOCKING"
}

export enum GateStatus {
  UNKNOWN = "UNKNOWN",
  OPEN = "OPEN",
  OPENING = "OPENING",
  CLOSED = "CLOSED",
  CLOSING = "CLOSING"
}



type GateMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Gate {
  readonly id: string;
  readonly transmissionStatus: TransmissionStatus | keyof typeof TransmissionStatus;
  readonly gateStatus: GateStatus | keyof typeof GateStatus;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Gate, GateMetaData>);
  static copyOf(source: Gate, mutator: (draft: MutableModel<Gate, GateMetaData>) => MutableModel<Gate, GateMetaData> | void): Gate;
}