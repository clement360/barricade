// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TransmissionStatus = {
  "UNKNOWN": "UNKNOWN",
  "LOCKED": "LOCKED",
  "LOCKING": "LOCKING",
  "UNLOCKED": "UNLOCKED",
  "UNLOCKING": "UNLOCKING"
};

const GateStatus = {
  "UNKNOWN": "UNKNOWN",
  "OPEN": "OPEN",
  "OPENING": "OPENING",
  "CLOSED": "CLOSED",
  "CLOSING": "CLOSING"
};

const { Gate } = initSchema(schema);

export {
  Gate,
  TransmissionStatus,
  GateStatus
};