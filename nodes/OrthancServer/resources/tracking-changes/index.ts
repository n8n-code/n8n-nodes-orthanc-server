import type { INodeProperties } from 'n8n-workflow';

export const trackingChangesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Tracking Changes"
					]
				}
			},
			"options": [
				{
					"name": "DELETE Changes",
					"value": "DELETE Changes",
					"action": "Clear changes",
					"description": "Clear the full history stored in the changes log",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/changes"
						}
					}
				},
				{
					"name": "GET Changes",
					"value": "GET Changes",
					"action": "List changes",
					"description": "Whenever Orthanc receives a new DICOM instance, this event is recorded in the so-called _Changes Log_. This enables remote scripts to react to the arrival of new DICOM resources. A typical application is auto-routing, where an external script waits for a new DICOM instance to arrive into Orthanc, then forward this instance to another modality.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/changes"
						}
					}
				},
				{
					"name": "DELETE Exports",
					"value": "DELETE Exports",
					"action": "Clear exports",
					"description": "Clear the full history stored in the exports log",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/exports"
						}
					}
				},
				{
					"name": "GET Exports",
					"value": "GET Exports",
					"action": "List exports",
					"description": "For medical traceability, Orthanc can be configured to store a log of all the resources that have been exported to remote modalities. In auto-routing scenarios, it is important to prevent this log to grow indefinitely as incoming instances are routed. You can either disable this logging by setting the option `LogExportedResources` to `false` in the configuration file, or periodically clear this log by `DELETE`-ing this URI. This route might be removed in future versions of Orthanc.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/exports"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /changes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tracking Changes"
					],
					"operation": [
						"DELETE Changes"
					]
				}
			}
		},
		{
			"displayName": "GET /changes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tracking Changes"
					],
					"operation": [
						"GET Changes"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Limit the number of results",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracking Changes"
					],
					"operation": [
						"GET Changes"
					]
				}
			}
		},
		{
			"displayName": "Since",
			"name": "since",
			"description": "Show only the resources since the provided index",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "since",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracking Changes"
					],
					"operation": [
						"GET Changes"
					]
				}
			}
		},
		{
			"displayName": "DELETE /exports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tracking Changes"
					],
					"operation": [
						"DELETE Exports"
					]
				}
			}
		},
		{
			"displayName": "GET /exports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tracking Changes"
					],
					"operation": [
						"GET Exports"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Limit the number of results",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracking Changes"
					],
					"operation": [
						"GET Exports"
					]
				}
			}
		},
		{
			"displayName": "Since",
			"name": "since",
			"description": "Show only the resources since the provided index",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "since",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracking Changes"
					],
					"operation": [
						"GET Exports"
					]
				}
			}
		},
];
