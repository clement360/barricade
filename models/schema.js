export const schema = {
    "models": {
        "Gate": {
            "name": "Gate",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "transmissionStatus": {
                    "name": "transmissionStatus",
                    "isArray": false,
                    "type": {
                        "enum": "TransmissionStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "gateStatus": {
                    "name": "gateStatus",
                    "isArray": false,
                    "type": {
                        "enum": "GateStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Gates",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        }
    },
    "enums": {
        "TransmissionStatus": {
            "name": "TransmissionStatus",
            "values": [
                "UNKNOWN",
                "LOCKED",
                "LOCKING",
                "UNLOCKED",
                "UNLOCKING"
            ]
        },
        "GateStatus": {
            "name": "GateStatus",
            "values": [
                "UNKNOWN",
                "OPEN",
                "OPENING",
                "CLOSED",
                "CLOSING"
            ]
        }
    },
    "nonModels": {},
    "version": "8297e9ff81621b8f19eae0ff92e6818e"
};