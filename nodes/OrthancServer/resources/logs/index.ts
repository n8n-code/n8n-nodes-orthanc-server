import type { INodeProperties } from 'n8n-workflow';

export const logsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					]
				}
			},
			"options": [
				{
					"name": "GET Tools Log Level",
					"value": "GET Tools Log Level",
					"action": "Get main log level",
					"description": "Get the main log level of Orthanc",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tools/log-level"
						}
					}
				},
				{
					"name": "PUT Tools Log Level",
					"value": "PUT Tools Log Level",
					"action": "Set main log level",
					"description": "Set the main log level of Orthanc",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/tools/log-level"
						}
					}
				},
				{
					"name": "GET Tools Log Level Dicom",
					"value": "GET Tools Log Level Dicom",
					"action": "Get log level for `dicom`",
					"description": "Get the log level of the log category `dicom`",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tools/log-level-dicom"
						}
					}
				},
				{
					"name": "PUT Tools Log Level Dicom",
					"value": "PUT Tools Log Level Dicom",
					"action": "Set log level for `dicom`",
					"description": "Set the log level of the log category `dicom`",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/tools/log-level-dicom"
						}
					}
				},
				{
					"name": "GET Tools Log Level Generic",
					"value": "GET Tools Log Level Generic",
					"action": "Get log level for `generic`",
					"description": "Get the log level of the log category `generic`",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tools/log-level-generic"
						}
					}
				},
				{
					"name": "PUT Tools Log Level Generic",
					"value": "PUT Tools Log Level Generic",
					"action": "Set log level for `generic`",
					"description": "Set the log level of the log category `generic`",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/tools/log-level-generic"
						}
					}
				},
				{
					"name": "GET Tools Log Level HTTP",
					"value": "GET Tools Log Level HTTP",
					"action": "Get log level for `http`",
					"description": "Get the log level of the log category `http`",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tools/log-level-http"
						}
					}
				},
				{
					"name": "PUT Tools Log Level HTTP",
					"value": "PUT Tools Log Level HTTP",
					"action": "Set log level for `http`",
					"description": "Set the log level of the log category `http`",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/tools/log-level-http"
						}
					}
				},
				{
					"name": "GET Tools Log Level Jobs",
					"value": "GET Tools Log Level Jobs",
					"action": "Get log level for `jobs`",
					"description": "Get the log level of the log category `jobs`",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tools/log-level-jobs"
						}
					}
				},
				{
					"name": "PUT Tools Log Level Jobs",
					"value": "PUT Tools Log Level Jobs",
					"action": "Set log level for `jobs`",
					"description": "Set the log level of the log category `jobs`",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/tools/log-level-jobs"
						}
					}
				},
				{
					"name": "GET Tools Log Level Lua",
					"value": "GET Tools Log Level Lua",
					"action": "Get log level for `lua`",
					"description": "Get the log level of the log category `lua`",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tools/log-level-lua"
						}
					}
				},
				{
					"name": "PUT Tools Log Level Lua",
					"value": "PUT Tools Log Level Lua",
					"action": "Set log level for `lua`",
					"description": "Set the log level of the log category `lua`",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/tools/log-level-lua"
						}
					}
				},
				{
					"name": "GET Tools Log Level Plugins",
					"value": "GET Tools Log Level Plugins",
					"action": "Get log level for `plugins`",
					"description": "Get the log level of the log category `plugins`",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tools/log-level-plugins"
						}
					}
				},
				{
					"name": "PUT Tools Log Level Plugins",
					"value": "PUT Tools Log Level Plugins",
					"action": "Set log level for `plugins`",
					"description": "Set the log level of the log category `plugins`",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/tools/log-level-plugins"
						}
					}
				},
				{
					"name": "GET Tools Log Level Sqlite",
					"value": "GET Tools Log Level Sqlite",
					"action": "Get log level for `sqlite`",
					"description": "Get the log level of the log category `sqlite`",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tools/log-level-sqlite"
						}
					}
				},
				{
					"name": "PUT Tools Log Level Sqlite",
					"value": "PUT Tools Log Level Sqlite",
					"action": "Set log level for `sqlite`",
					"description": "Set the log level of the log category `sqlite`",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/tools/log-level-sqlite"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /tools/log-level",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"GET Tools Log Level"
					]
				}
			}
		},
		{
			"displayName": "PUT /tools/log-level",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"PUT Tools Log Level"
					]
				}
			}
		},
		{
			"displayName": "PUT /tools/log-level<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"PUT Tools Log Level"
					]
				}
			}
		},
		{
			"displayName": "GET /tools/log-level-dicom",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"GET Tools Log Level Dicom"
					]
				}
			}
		},
		{
			"displayName": "PUT /tools/log-level-dicom",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"PUT Tools Log Level Dicom"
					]
				}
			}
		},
		{
			"displayName": "PUT /tools/log-level-dicom<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"PUT Tools Log Level Dicom"
					]
				}
			}
		},
		{
			"displayName": "GET /tools/log-level-generic",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"GET Tools Log Level Generic"
					]
				}
			}
		},
		{
			"displayName": "PUT /tools/log-level-generic",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"PUT Tools Log Level Generic"
					]
				}
			}
		},
		{
			"displayName": "PUT /tools/log-level-generic<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"PUT Tools Log Level Generic"
					]
				}
			}
		},
		{
			"displayName": "GET /tools/log-level-http",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"GET Tools Log Level HTTP"
					]
				}
			}
		},
		{
			"displayName": "PUT /tools/log-level-http",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"PUT Tools Log Level HTTP"
					]
				}
			}
		},
		{
			"displayName": "PUT /tools/log-level-http<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"PUT Tools Log Level HTTP"
					]
				}
			}
		},
		{
			"displayName": "GET /tools/log-level-jobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"GET Tools Log Level Jobs"
					]
				}
			}
		},
		{
			"displayName": "PUT /tools/log-level-jobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"PUT Tools Log Level Jobs"
					]
				}
			}
		},
		{
			"displayName": "PUT /tools/log-level-jobs<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"PUT Tools Log Level Jobs"
					]
				}
			}
		},
		{
			"displayName": "GET /tools/log-level-lua",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"GET Tools Log Level Lua"
					]
				}
			}
		},
		{
			"displayName": "PUT /tools/log-level-lua",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"PUT Tools Log Level Lua"
					]
				}
			}
		},
		{
			"displayName": "PUT /tools/log-level-lua<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"PUT Tools Log Level Lua"
					]
				}
			}
		},
		{
			"displayName": "GET /tools/log-level-plugins",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"GET Tools Log Level Plugins"
					]
				}
			}
		},
		{
			"displayName": "PUT /tools/log-level-plugins",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"PUT Tools Log Level Plugins"
					]
				}
			}
		},
		{
			"displayName": "PUT /tools/log-level-plugins<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"PUT Tools Log Level Plugins"
					]
				}
			}
		},
		{
			"displayName": "GET /tools/log-level-sqlite",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"GET Tools Log Level Sqlite"
					]
				}
			}
		},
		{
			"displayName": "PUT /tools/log-level-sqlite",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"PUT Tools Log Level Sqlite"
					]
				}
			}
		},
		{
			"displayName": "PUT /tools/log-level-sqlite<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"PUT Tools Log Level Sqlite"
					]
				}
			}
		},
];
