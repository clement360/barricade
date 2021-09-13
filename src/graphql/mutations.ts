/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGate = /* GraphQL */ `
  mutation CreateGate(
    $input: CreateGateInput!
    $condition: ModelGateConditionInput
  ) {
    createGate(input: $input, condition: $condition) {
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
export const updateGate = /* GraphQL */ `
  mutation UpdateGate(
    $input: UpdateGateInput!
    $condition: ModelGateConditionInput
  ) {
    updateGate(input: $input, condition: $condition) {
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
export const deleteGate = /* GraphQL */ `
  mutation DeleteGate(
    $input: DeleteGateInput!
    $condition: ModelGateConditionInput
  ) {
    deleteGate(input: $input, condition: $condition) {
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
