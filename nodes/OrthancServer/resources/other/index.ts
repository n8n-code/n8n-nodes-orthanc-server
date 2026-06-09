import type { INodeProperties } from 'n8n-workflow';

export const otherDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					]
				}
			},
			"options": [
				{
					"name": "GET Instances Attachments",
					"value": "GET Instances Attachments",
					"action": "List operations on attachments",
					"description": "Get the list of the operations that are available for attachments associated with the given instance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}"
						}
					}
				},
				{
					"name": "GET Instances Frames",
					"value": "GET Instances Frames",
					"action": "List operations",
					"description": "List the available operations under URI `/instances/{id}/frames/{frame}/`",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/frames/{{$parameter[\"frame\"]}}"
						}
					}
				},
				{
					"name": "GET Patients Attachments",
					"value": "GET Patients Attachments",
					"action": "List operations on attachments",
					"description": "Get the list of the operations that are available for attachments associated with the given patient",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patients/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}"
						}
					}
				},
				{
					"name": "GET Series Attachments",
					"value": "GET Series Attachments",
					"action": "List operations on attachments",
					"description": "Get the list of the operations that are available for attachments associated with the given series",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/series/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}"
						}
					}
				},
				{
					"name": "GET Studies Attachments",
					"value": "GET Studies Attachments",
					"action": "List operations on attachments",
					"description": "Get the list of the operations that are available for attachments associated with the given study",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/studies/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}"
						}
					}
				},
				{
					"name": "GET Tools",
					"value": "GET Tools",
					"action": "List operations",
					"description": "List the available operations under URI `/tools/`",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tools"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /instances/{id}/attachments/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"GET Instances Attachments"
					]
				}
			}
		},
		{
			"displayName": "If None Match",
			"name": "If-None-Match",
			"description": "Optional revision of the attachment, to check if its content has changed",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-None-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"GET Instances Attachments"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"GET Instances Attachments"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "The name of the attachment, or its index (cf. `UserContentType` configuration option)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"GET Instances Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/frames/{frame}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"GET Instances Frames"
					]
				}
			}
		},
		{
			"displayName": "Frame",
			"name": "frame",
			"required": true,
			"description": "",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"GET Instances Frames"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"GET Instances Frames"
					]
				}
			}
		},
		{
			"displayName": "GET /patients/{id}/attachments/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"GET Patients Attachments"
					]
				}
			}
		},
		{
			"displayName": "If None Match",
			"name": "If-None-Match",
			"description": "Optional revision of the attachment, to check if its content has changed",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-None-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"GET Patients Attachments"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"GET Patients Attachments"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "The name of the attachment, or its index (cf. `UserContentType` configuration option)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"GET Patients Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /series/{id}/attachments/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"GET Series Attachments"
					]
				}
			}
		},
		{
			"displayName": "If None Match",
			"name": "If-None-Match",
			"description": "Optional revision of the attachment, to check if its content has changed",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-None-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"GET Series Attachments"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"GET Series Attachments"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "The name of the attachment, or its index (cf. `UserContentType` configuration option)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"GET Series Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /studies/{id}/attachments/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"GET Studies Attachments"
					]
				}
			}
		},
		{
			"displayName": "If None Match",
			"name": "If-None-Match",
			"description": "Optional revision of the attachment, to check if its content has changed",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-None-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"GET Studies Attachments"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"GET Studies Attachments"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "The name of the attachment, or its index (cf. `UserContentType` configuration option)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"GET Studies Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /tools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"GET Tools"
					]
				}
			}
		},
];
