/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncGates = /* GraphQL */ `
  query SyncGates(
    $filter: ModelGateFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        transmissionStatus
        gateStatus
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getGate = /* GraphQL */ `
  query GetGate($id: ID!) {
    getGate(id: $id) {
      id
      transmissionStatus
      gateStatus
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listGates = /* GraphQL */ `
  query ListGates(
    $filter: ModelGateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        transmissionStatus
        gateStatus
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
