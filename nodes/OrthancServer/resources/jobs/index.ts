import type { INodeProperties } from 'n8n-workflow';

export const jobsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					]
				}
			},
			"options": [
				{
					"name": "GET Jobs",
					"value": "GET Jobs",
					"action": "List jobs",
					"description": "List all the available jobs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/jobs"
						}
					}
				},
				{
					"name": "POST Jobs Cancel",
					"value": "POST Jobs Cancel",
					"action": "Cancel job",
					"description": "Cancel the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/jobs/{{$parameter[\"id\"]}}/cancel"
						}
					}
				},
				{
					"name": "POST Jobs Pause",
					"value": "POST Jobs Pause",
					"action": "Pause job",
					"description": "Pause the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/jobs/{{$parameter[\"id\"]}}/pause"
						}
					}
				},
				{
					"name": "POST Jobs Resubmit",
					"value": "POST Jobs Resubmit",
					"action": "Resubmit job",
					"description": "Resubmit the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/jobs/{{$parameter[\"id\"]}}/resubmit"
						}
					}
				},
				{
					"name": "POST Jobs Resume",
					"value": "POST Jobs Resume",
					"action": "Resume job",
					"description": "Resume the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/jobs/{{$parameter[\"id\"]}}/resume"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /jobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"GET Jobs"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "expand",
			"description": "If present, retrieve detailed information about the individual jobs",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"GET Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /jobs/{id}/cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"POST Jobs Cancel"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the job of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"POST Jobs Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /jobs/{id}/pause",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"POST Jobs Pause"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the job of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"POST Jobs Pause"
					]
				}
			}
		},
		{
			"displayName": "POST /jobs/{id}/resubmit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"POST Jobs Resubmit"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the job of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"POST Jobs Resubmit"
					]
				}
			}
		},
		{
			"displayName": "POST /jobs/{id}/resume",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"POST Jobs Resume"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the job of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"POST Jobs Resume"
					]
				}
			}
		},
];
