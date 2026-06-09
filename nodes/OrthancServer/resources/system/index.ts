import type { INodeProperties } from 'n8n-workflow';

export const systemDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					]
				}
			},
			"options": [
				{
					"name": "GET Plugins",
					"value": "GET Plugins",
					"action": "List plugins",
					"description": "List all the installed plugins",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/plugins"
						}
					}
				},
				{
					"name": "GET Plugins Explorer Js",
					"value": "GET Plugins Explorer Js",
					"action": "JavaScript extensions to Orthanc Explorer",
					"description": "Get the JavaScript extensions that are installed by all the plugins using the `OrthancPluginExtendOrthancExplorer()` function of the plugin SDK. This route is for internal use of Orthanc Explorer.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/plugins/explorer.js"
						}
					}
				},
				{
					"name": "GET Statistics",
					"value": "GET Statistics",
					"action": "Get database statistics",
					"description": "Get statistics related to the database of Orthanc",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/statistics"
						}
					}
				},
				{
					"name": "GET System",
					"value": "GET System",
					"action": "Get system information",
					"description": "Get system information about Orthanc",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/system"
						}
					}
				},
				{
					"name": "GET Tools Accepted Transfer Syntaxes",
					"value": "GET Tools Accepted Transfer Syntaxes",
					"action": "Get accepted transfer syntaxes",
					"description": "Get the list of UIDs of the DICOM transfer syntaxes that are accepted by Orthanc C-STORE SCP. This corresponds to the configuration options `AcceptedTransferSyntaxes` and `XXXTransferSyntaxAccepted`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tools/accepted-transfer-syntaxes"
						}
					}
				},
				{
					"name": "PUT Tools Accepted Transfer Syntaxes",
					"value": "PUT Tools Accepted Transfer Syntaxes",
					"action": "Set accepted transfer syntaxes",
					"description": "Set the DICOM transfer syntaxes that accepted by Orthanc C-STORE SCP",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/tools/accepted-transfer-syntaxes"
						}
					}
				},
				{
					"name": "POST Tools Bulk Anonymize",
					"value": "POST Tools Bulk Anonymize",
					"action": "Anonymize a set of resources",
					"description": "Start a job that will anonymize all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tools/bulk-anonymize"
						}
					}
				},
				{
					"name": "POST Tools Bulk Content",
					"value": "POST Tools Bulk Content",
					"action": "Describe a set of resources",
					"description": "Get the content all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field, in one single call.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tools/bulk-content"
						}
					}
				},
				{
					"name": "POST Tools Bulk Delete",
					"value": "POST Tools Bulk Delete",
					"action": "Delete a set of resources",
					"description": "Delete all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tools/bulk-delete"
						}
					}
				},
				{
					"name": "POST Tools Bulk Modify",
					"value": "POST Tools Bulk Modify",
					"action": "Modify a set of resources",
					"description": "Start a job that will modify all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tools/bulk-modify"
						}
					}
				},
				{
					"name": "POST Tools Create Archive",
					"value": "POST Tools Create Archive",
					"action": "Create ZIP archive",
					"description": "Create a ZIP archive containing the DICOM resources (patients, studies, series, or instances) whose Orthanc identifiers are provided in the body",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tools/create-archive"
						}
					}
				},
				{
					"name": "POST Tools Create Dicom",
					"value": "POST Tools Create Dicom",
					"action": "Create one DICOM instance",
					"description": "Create one DICOM instance, and store it into Orthanc",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tools/create-dicom"
						}
					}
				},
				{
					"name": "POST Tools Create Media",
					"value": "POST Tools Create Media",
					"action": "Create DICOMDIR media",
					"description": "Create a DICOMDIR media containing the DICOM resources (patients, studies, series, or instances) whose Orthanc identifiers are provided in the body",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tools/create-media"
						}
					}
				},
				{
					"name": "POST Tools Create Media Extended",
					"value": "POST Tools Create Media Extended",
					"action": "Create DICOMDIR media",
					"description": "Create a DICOMDIR media containing the DICOM resources (patients, studies, series, or instances) whose Orthanc identifiers are provided in the body",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tools/create-media-extended"
						}
					}
				},
				{
					"name": "GET Tools Default Encoding",
					"value": "GET Tools Default Encoding",
					"action": "Get default encoding",
					"description": "Get the default encoding that is used by Orthanc if parsing a DICOM instance without the `SpecificCharacterEncoding` tag, or during C-FIND. This corresponds to the configuration option `DefaultEncoding`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tools/default-encoding"
						}
					}
				},
				{
					"name": "PUT Tools Default Encoding",
					"value": "PUT Tools Default Encoding",
					"action": "Set default encoding",
					"description": "Change the default encoding that is used by Orthanc if parsing a DICOM instance without the `SpecificCharacterEncoding` tag, or during C-FIND. This corresponds to the configuration option `DefaultEncoding`.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/tools/default-encoding"
						}
					}
				},
				{
					"name": "GET Tools Dicom Conformance",
					"value": "GET Tools Dicom Conformance",
					"action": "Get DICOM conformance",
					"description": "Get the DICOM conformance statement of Orthanc",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tools/dicom-conformance"
						}
					}
				},
				{
					"name": "POST Tools Dicom Echo",
					"value": "POST Tools Dicom Echo",
					"action": "Trigger C-ECHO SCU",
					"description": "Trigger C-ECHO SCU command against a DICOM modality described in the POST body, without having to register the modality in some `/modalities/{id}` (new in Orthanc 1.8.1)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tools/dicom-echo"
						}
					}
				},
				{
					"name": "POST Tools Execute Script",
					"value": "POST Tools Execute Script",
					"action": "Execute Lua script",
					"description": "Execute the provided Lua script by the Orthanc server. This is very insecure for Orthanc servers that are remotely accessible, cf. configuration option `ExecuteLuaEnabled`",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tools/execute-script"
						}
					}
				},
				{
					"name": "POST Tools Find",
					"value": "POST Tools Find",
					"action": "Look for local resources",
					"description": "This URI can be used to perform a search on the content of the local Orthanc server, in a way that is similar to querying remote DICOM modalities using C-FIND SCU: https://book.orthanc-server.com/users/rest.html#performing-finds-within-orthanc",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tools/find"
						}
					}
				},
				{
					"name": "GET Tools Generate Uid",
					"value": "GET Tools Generate Uid",
					"action": "Generate an identifier",
					"description": "Generate a random DICOM identifier",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tools/generate-uid"
						}
					}
				},
				{
					"name": "POST Tools Invalidate Tags",
					"value": "POST Tools Invalidate Tags",
					"action": "Invalidate DICOM-as-JSON summaries",
					"description": "Remove all the attachments of the type \"DICOM-as-JSON\" that are associated will all the DICOM instances stored in Orthanc. These summaries will be automatically re-created on the next access. This is notably useful after changes to the `Dictionary` configuration option. https://book.orthanc-server.com/faq/orthanc-storage.html#storage-area",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tools/invalidate-tags"
						}
					}
				},
				{
					"name": "POST Tools Lookup",
					"value": "POST Tools Lookup",
					"action": "Look for DICOM identifiers",
					"description": "This URI can be used to convert one DICOM identifier to a list of matching Orthanc resources",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tools/lookup"
						}
					}
				},
				{
					"name": "GET Tools Metrics",
					"value": "GET Tools Metrics",
					"action": "Are metrics collected?",
					"description": "Returns a Boolean specifying whether Prometheus metrics are collected and exposed at `/tools/metrics-prometheus`",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tools/metrics"
						}
					}
				},
				{
					"name": "PUT Tools Metrics",
					"value": "PUT Tools Metrics",
					"action": "Enable collection of metrics",
					"description": "Enable or disable the collection and publication of metrics at `/tools/metrics-prometheus`",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/tools/metrics"
						}
					}
				},
				{
					"name": "GET Tools Metrics Prometheus",
					"value": "GET Tools Metrics Prometheus",
					"action": "Get usage metrics",
					"description": "Get usage metrics of Orthanc in the Prometheus file format (OpenMetrics): https://book.orthanc-server.com/users/advanced-rest.html#instrumentation-with-prometheus",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tools/metrics-prometheus"
						}
					}
				},
				{
					"name": "GET Tools Now",
					"value": "GET Tools Now",
					"action": "Get UTC time",
					"description": "Get UTC time",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tools/now"
						}
					}
				},
				{
					"name": "GET Tools Now Local",
					"value": "GET Tools Now Local",
					"action": "Get local time",
					"description": "Get local time",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tools/now-local"
						}
					}
				},
				{
					"name": "POST Tools Reconstruct",
					"value": "POST Tools Reconstruct",
					"action": "Reconstruct all the index",
					"description": "Reconstruct the index of all the tags of all the DICOM instances that are stored in Orthanc. This is notably useful after the deletion of resources whose children resources have inconsistent values with their sibling resources. Beware that this is a highly time-consuming operation, as all the DICOM instances will be parsed again, and as all the Orthanc index will be regenerated. If you have a large database to process, it is advised to use the Housekeeper plugin to perform this action resource by resource",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tools/reconstruct"
						}
					}
				},
				{
					"name": "POST Tools Reset",
					"value": "POST Tools Reset",
					"action": "Restart Orthanc",
					"description": "Restart Orthanc",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tools/reset"
						}
					}
				},
				{
					"name": "POST Tools Shutdown",
					"value": "POST Tools Shutdown",
					"action": "Shutdown Orthanc",
					"description": "Shutdown Orthanc",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tools/shutdown"
						}
					}
				},
				{
					"name": "GET Tools Unknown Sop Class Accepted",
					"value": "GET Tools Unknown Sop Class Accepted",
					"action": "Is unknown SOP class accepted?",
					"description": "Shall Orthanc C-STORE SCP accept DICOM instances with an unknown SOP class UID?",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tools/unknown-sop-class-accepted"
						}
					}
				},
				{
					"name": "PUT Tools Unknown Sop Class Accepted",
					"value": "PUT Tools Unknown Sop Class Accepted",
					"action": "Set unknown SOP class accepted",
					"description": "Set whether Orthanc C-STORE SCP should accept DICOM instances with an unknown SOP class UID",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/tools/unknown-sop-class-accepted"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /plugins",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"GET Plugins"
					]
				}
			}
		},
		{
			"displayName": "GET /plugins/explorer.js",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"GET Plugins Explorer Js"
					]
				}
			}
		},
		{
			"displayName": "GET /statistics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"GET Statistics"
					]
				}
			}
		},
		{
			"displayName": "GET /system",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"GET System"
					]
				}
			}
		},
		{
			"displayName": "GET /tools/accepted-transfer-syntaxes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"GET Tools Accepted Transfer Syntaxes"
					]
				}
			}
		},
		{
			"displayName": "PUT /tools/accepted-transfer-syntaxes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"PUT Tools Accepted Transfer Syntaxes"
					]
				}
			}
		},
		{
			"displayName": "PUT /tools/accepted-transfer-syntaxes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"PUT Tools Accepted Transfer Syntaxes"
					]
				}
			}
		},
		{
			"displayName": "POST /tools/bulk-anonymize",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Asynchronous",
			"name": "Asynchronous",
			"type": "boolean",
			"default": true,
			"description": "If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.",
			"routing": {
				"send": {
					"property": "Asynchronous",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Dicom Version",
			"name": "DicomVersion",
			"type": "string",
			"default": "",
			"description": "Version of the DICOM standard to be used for anonymization. Check out configuration option `DeidentifyLogsDicomVersion` for possible values.",
			"routing": {
				"send": {
					"property": "DicomVersion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Force",
			"name": "Force",
			"type": "boolean",
			"default": true,
			"description": "Allow the modification of tags related to DICOM identifiers, at the risk of breaking the DICOM model of the real world",
			"routing": {
				"send": {
					"property": "Force",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Keep",
			"name": "Keep",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of DICOM tags whose value must not be destroyed by the anonymization. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).",
			"routing": {
				"send": {
					"property": "Keep",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Keep Private Tags",
			"name": "KeepPrivateTags",
			"type": "boolean",
			"default": true,
			"description": "Keep the private tags from the DICOM instances (defaults to `false`)",
			"routing": {
				"send": {
					"property": "KeepPrivateTags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Keep Source",
			"name": "KeepSource",
			"type": "boolean",
			"default": true,
			"description": "If set to `false`, instructs Orthanc to the remove original resources. By default, the original resources are kept in Orthanc.",
			"routing": {
				"send": {
					"property": "KeepSource",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Permissive",
			"name": "Permissive",
			"type": "boolean",
			"default": true,
			"description": "If `true`, ignore errors during the individual steps of the job.",
			"routing": {
				"send": {
					"property": "Permissive",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "Priority",
			"type": "number",
			"default": 0,
			"description": "In asynchronous mode, the priority of the job. The lower the value, the higher the priority.",
			"routing": {
				"send": {
					"property": "Priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Private Creator",
			"name": "PrivateCreator",
			"type": "string",
			"default": "",
			"description": "The private creator to be used for private tags in `Replace`",
			"routing": {
				"send": {
					"property": "PrivateCreator",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Remove",
			"name": "Remove",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of additional tags to be removed from the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).",
			"routing": {
				"send": {
					"property": "Remove",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Replace",
			"name": "Replace",
			"type": "json",
			"default": "{}",
			"description": "Associative array to change the value of some DICOM tags in the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).",
			"routing": {
				"send": {
					"property": "Replace",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Resources",
			"name": "Resources",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of the Orthanc identifiers of the patients/studies/series/instances of interest.",
			"routing": {
				"send": {
					"property": "Resources",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Synchronous",
			"name": "Synchronous",
			"type": "boolean",
			"default": true,
			"description": "If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.",
			"routing": {
				"send": {
					"property": "Synchronous",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Transcode",
			"name": "Transcode",
			"type": "string",
			"default": "",
			"description": "Transcode the DICOM instances to the provided DICOM transfer syntax: https://book.orthanc-server.com/faq/transcoding.html",
			"routing": {
				"send": {
					"property": "Transcode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Anonymize"
					]
				}
			}
		},
		{
			"displayName": "POST /tools/bulk-content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Content"
					]
				}
			}
		},
		{
			"displayName": "Full",
			"name": "Full",
			"type": "boolean",
			"default": true,
			"description": "If set to `true`, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)",
			"routing": {
				"send": {
					"property": "Full",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Content"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "string",
			"default": "",
			"description": "This optional argument specifies the level of interest (can be `Patient`, `Study`, `Series` or `Instance`). Orthanc will loop over the items inside `Resources`, and explore upward or downward in the DICOM hierarchy in order to find the level of interest.",
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Content"
					]
				}
			}
		},
		{
			"displayName": "Metadata",
			"name": "Metadata",
			"type": "boolean",
			"default": true,
			"description": "If set to `true` (default value), the metadata associated with the resources will also be retrieved.",
			"routing": {
				"send": {
					"property": "Metadata",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Content"
					]
				}
			}
		},
		{
			"displayName": "Resources",
			"name": "Resources",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of the Orthanc identifiers of the patients/studies/series/instances of interest.",
			"routing": {
				"send": {
					"property": "Resources",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Content"
					]
				}
			}
		},
		{
			"displayName": "Short",
			"name": "Short",
			"type": "boolean",
			"default": true,
			"description": "If set to `true`, report the DICOM tags in hexadecimal format",
			"routing": {
				"send": {
					"property": "Short",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Content"
					]
				}
			}
		},
		{
			"displayName": "POST /tools/bulk-delete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "Resources",
			"name": "Resources",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of the Orthanc identifiers of the patients/studies/series/instances of interest.",
			"routing": {
				"send": {
					"property": "Resources",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "POST /tools/bulk-modify",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Modify"
					]
				}
			}
		},
		{
			"displayName": "Asynchronous",
			"name": "Asynchronous",
			"type": "boolean",
			"default": true,
			"description": "If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.",
			"routing": {
				"send": {
					"property": "Asynchronous",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Modify"
					]
				}
			}
		},
		{
			"displayName": "Force",
			"name": "Force",
			"type": "boolean",
			"default": true,
			"description": "Allow the modification of tags related to DICOM identifiers, at the risk of breaking the DICOM model of the real world",
			"routing": {
				"send": {
					"property": "Force",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Modify"
					]
				}
			}
		},
		{
			"displayName": "Keep",
			"name": "Keep",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Keep the original value of the specified tags, to be chosen among the `StudyInstanceUID`, `SeriesInstanceUID` and `SOPInstanceUID` tags. Avoid this feature as much as possible, as this breaks the DICOM model of the real world.",
			"routing": {
				"send": {
					"property": "Keep",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Modify"
					]
				}
			}
		},
		{
			"displayName": "Keep Source",
			"name": "KeepSource",
			"type": "boolean",
			"default": true,
			"description": "If set to `false`, instructs Orthanc to the remove original resources. By default, the original resources are kept in Orthanc.",
			"routing": {
				"send": {
					"property": "KeepSource",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Modify"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "string",
			"default": "",
			"description": "Level of the modification (`Patient`, `Study`, `Series` or `Instance`). If absent, the level defaults to `Instance`, but is set to `Patient` if `PatientID` is modified, to `Study` if `StudyInstanceUID` is modified, or to `Series` if `SeriesInstancesUID` is modified. (new in Orthanc 1.9.7)",
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Modify"
					]
				}
			}
		},
		{
			"displayName": "Permissive",
			"name": "Permissive",
			"type": "boolean",
			"default": true,
			"description": "If `true`, ignore errors during the individual steps of the job.",
			"routing": {
				"send": {
					"property": "Permissive",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Modify"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "Priority",
			"type": "number",
			"default": 0,
			"description": "In asynchronous mode, the priority of the job. The lower the value, the higher the priority.",
			"routing": {
				"send": {
					"property": "Priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Modify"
					]
				}
			}
		},
		{
			"displayName": "Private Creator",
			"name": "PrivateCreator",
			"type": "string",
			"default": "",
			"description": "The private creator to be used for private tags in `Replace`",
			"routing": {
				"send": {
					"property": "PrivateCreator",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Modify"
					]
				}
			}
		},
		{
			"displayName": "Remove",
			"name": "Remove",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of tags that must be removed from the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).",
			"routing": {
				"send": {
					"property": "Remove",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Modify"
					]
				}
			}
		},
		{
			"displayName": "Remove Private Tags",
			"name": "RemovePrivateTags",
			"type": "boolean",
			"default": true,
			"description": "Remove the private tags from the DICOM instances (defaults to `false`)",
			"routing": {
				"send": {
					"property": "RemovePrivateTags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Modify"
					]
				}
			}
		},
		{
			"displayName": "Replace",
			"name": "Replace",
			"type": "json",
			"default": "{}",
			"description": "Associative array to change the value of some DICOM tags in the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).",
			"routing": {
				"send": {
					"property": "Replace",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Modify"
					]
				}
			}
		},
		{
			"displayName": "Resources",
			"name": "Resources",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of the Orthanc identifiers of the patients/studies/series/instances of interest.",
			"routing": {
				"send": {
					"property": "Resources",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Modify"
					]
				}
			}
		},
		{
			"displayName": "Synchronous",
			"name": "Synchronous",
			"type": "boolean",
			"default": true,
			"description": "If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.",
			"routing": {
				"send": {
					"property": "Synchronous",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Modify"
					]
				}
			}
		},
		{
			"displayName": "Transcode",
			"name": "Transcode",
			"type": "string",
			"default": "",
			"description": "Transcode the DICOM instances to the provided DICOM transfer syntax: https://book.orthanc-server.com/faq/transcoding.html",
			"routing": {
				"send": {
					"property": "Transcode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Bulk Modify"
					]
				}
			}
		},
		{
			"displayName": "POST /tools/create-archive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Archive"
					]
				}
			}
		},
		{
			"displayName": "Asynchronous",
			"name": "Asynchronous",
			"type": "boolean",
			"default": true,
			"description": "If `true`, create the archive in asynchronous mode, which means that a job is submitted to create the archive in background.",
			"routing": {
				"send": {
					"property": "Asynchronous",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Archive"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "Priority",
			"type": "number",
			"default": 0,
			"description": "In asynchronous mode, the priority of the job. The lower the value, the higher the priority.",
			"routing": {
				"send": {
					"property": "Priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Archive"
					]
				}
			}
		},
		{
			"displayName": "Resources",
			"name": "Resources",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of Orthanc identifiers of interest.",
			"routing": {
				"send": {
					"property": "Resources",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Archive"
					]
				}
			}
		},
		{
			"displayName": "Synchronous",
			"name": "Synchronous",
			"type": "boolean",
			"default": true,
			"description": "If `true`, create the archive in synchronous mode, which means that the HTTP answer will directly contain the ZIP file. This is the default, easy behavior. However, if global configuration option \"SynchronousZipStream\" is set to \"false\", asynchronous transfers should be preferred for large amount of data, as the creation of the temporary file might lead to network timeouts.",
			"routing": {
				"send": {
					"property": "Synchronous",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Archive"
					]
				}
			}
		},
		{
			"displayName": "Transcode",
			"name": "Transcode",
			"type": "string",
			"default": "",
			"description": "If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html",
			"routing": {
				"send": {
					"property": "Transcode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Archive"
					]
				}
			}
		},
		{
			"displayName": "POST /tools/create-dicom",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Dicom"
					]
				}
			}
		},
		{
			"displayName": "Content",
			"name": "Content",
			"type": "string",
			"default": "",
			"description": "This field can be used to embed an image (pixel data) or a PDF inside the created DICOM instance. The PNG image, the JPEG image or the PDF file must be provided using their [data URI scheme encoding](https://en.wikipedia.org/wiki/Data_URI_scheme). This field can possibly contain a JSON array, in which case a DICOM series is created containing one DICOM instance for each item in the `Content` field.",
			"routing": {
				"send": {
					"property": "Content",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Dicom"
					]
				}
			}
		},
		{
			"displayName": "Force",
			"name": "Force",
			"type": "boolean",
			"default": true,
			"description": "Avoid the consistency checks for the DICOM tags that enforce the DICOM model of the real-world. You can notably use this flag if you need to manually set the tags `StudyInstanceUID`, `SeriesInstanceUID`, or `SOPInstanceUID`. Be careful with this feature.",
			"routing": {
				"send": {
					"property": "Force",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Dicom"
					]
				}
			}
		},
		{
			"displayName": "Interpret Binary Tags",
			"name": "InterpretBinaryTags",
			"type": "boolean",
			"default": true,
			"description": "If some value in the `Tags` associative array is formatted according to some [data URI scheme encoding](https://en.wikipedia.org/wiki/Data_URI_scheme), whether this value is decoded to a binary value or kept as such (`true` by default)",
			"routing": {
				"send": {
					"property": "InterpretBinaryTags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Dicom"
					]
				}
			}
		},
		{
			"displayName": "Parent",
			"name": "Parent",
			"type": "string",
			"default": "",
			"description": "If present, the newly created instance will be attached to the parent DICOM resource whose Orthanc identifier is contained in this field. The DICOM tags of the parent modules in the DICOM hierarchy will be automatically copied to the newly created instance.",
			"routing": {
				"send": {
					"property": "Parent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Dicom"
					]
				}
			}
		},
		{
			"displayName": "Private Creator",
			"name": "PrivateCreator",
			"type": "string",
			"default": "",
			"description": "The private creator to be used for private tags in `Tags`",
			"routing": {
				"send": {
					"property": "PrivateCreator",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Dicom"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "{}",
			"description": "Associative array containing the tags of the new instance to be created",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Dicom"
					]
				}
			}
		},
		{
			"displayName": "POST /tools/create-media",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Media"
					]
				}
			}
		},
		{
			"displayName": "Asynchronous",
			"name": "Asynchronous",
			"type": "boolean",
			"default": true,
			"description": "If `true`, create the archive in asynchronous mode, which means that a job is submitted to create the archive in background.",
			"routing": {
				"send": {
					"property": "Asynchronous",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Media"
					]
				}
			}
		},
		{
			"displayName": "Extended",
			"name": "Extended",
			"type": "boolean",
			"default": true,
			"description": "If `true`, will include additional tags such as `SeriesDescription`, leading to a so-called *extended DICOMDIR*. Default value is `false`.",
			"routing": {
				"send": {
					"property": "Extended",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Media"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "Priority",
			"type": "number",
			"default": 0,
			"description": "In asynchronous mode, the priority of the job. The lower the value, the higher the priority.",
			"routing": {
				"send": {
					"property": "Priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Media"
					]
				}
			}
		},
		{
			"displayName": "Resources",
			"name": "Resources",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of Orthanc identifiers of interest.",
			"routing": {
				"send": {
					"property": "Resources",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Media"
					]
				}
			}
		},
		{
			"displayName": "Synchronous",
			"name": "Synchronous",
			"type": "boolean",
			"default": true,
			"description": "If `true`, create the archive in synchronous mode, which means that the HTTP answer will directly contain the ZIP file. This is the default, easy behavior. However, if global configuration option \"SynchronousZipStream\" is set to \"false\", asynchronous transfers should be preferred for large amount of data, as the creation of the temporary file might lead to network timeouts.",
			"routing": {
				"send": {
					"property": "Synchronous",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Media"
					]
				}
			}
		},
		{
			"displayName": "Transcode",
			"name": "Transcode",
			"type": "string",
			"default": "",
			"description": "If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html",
			"routing": {
				"send": {
					"property": "Transcode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Media"
					]
				}
			}
		},
		{
			"displayName": "POST /tools/create-media-extended",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Media Extended"
					]
				}
			}
		},
		{
			"displayName": "Asynchronous",
			"name": "Asynchronous",
			"type": "boolean",
			"default": true,
			"description": "If `true`, create the archive in asynchronous mode, which means that a job is submitted to create the archive in background.",
			"routing": {
				"send": {
					"property": "Asynchronous",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Media Extended"
					]
				}
			}
		},
		{
			"displayName": "Extended",
			"name": "Extended",
			"type": "boolean",
			"default": true,
			"description": "If `true`, will include additional tags such as `SeriesDescription`, leading to a so-called *extended DICOMDIR*. Default value is `true`.",
			"routing": {
				"send": {
					"property": "Extended",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Media Extended"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "Priority",
			"type": "number",
			"default": 0,
			"description": "In asynchronous mode, the priority of the job. The lower the value, the higher the priority.",
			"routing": {
				"send": {
					"property": "Priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Media Extended"
					]
				}
			}
		},
		{
			"displayName": "Resources",
			"name": "Resources",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of Orthanc identifiers of interest.",
			"routing": {
				"send": {
					"property": "Resources",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Media Extended"
					]
				}
			}
		},
		{
			"displayName": "Synchronous",
			"name": "Synchronous",
			"type": "boolean",
			"default": true,
			"description": "If `true`, create the archive in synchronous mode, which means that the HTTP answer will directly contain the ZIP file. This is the default, easy behavior. However, if global configuration option \"SynchronousZipStream\" is set to \"false\", asynchronous transfers should be preferred for large amount of data, as the creation of the temporary file might lead to network timeouts.",
			"routing": {
				"send": {
					"property": "Synchronous",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Media Extended"
					]
				}
			}
		},
		{
			"displayName": "Transcode",
			"name": "Transcode",
			"type": "string",
			"default": "",
			"description": "If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html",
			"routing": {
				"send": {
					"property": "Transcode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Create Media Extended"
					]
				}
			}
		},
		{
			"displayName": "GET /tools/default-encoding",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"GET Tools Default Encoding"
					]
				}
			}
		},
		{
			"displayName": "PUT /tools/default-encoding",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"PUT Tools Default Encoding"
					]
				}
			}
		},
		{
			"displayName": "PUT /tools/default-encoding<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"PUT Tools Default Encoding"
					]
				}
			}
		},
		{
			"displayName": "GET /tools/dicom-conformance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"GET Tools Dicom Conformance"
					]
				}
			}
		},
		{
			"displayName": "POST /tools/dicom-echo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Dicom Echo"
					]
				}
			}
		},
		{
			"displayName": "AET",
			"name": "AET",
			"type": "string",
			"default": "",
			"description": "AET of the remote DICOM modality",
			"routing": {
				"send": {
					"property": "AET",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Dicom Echo"
					]
				}
			}
		},
		{
			"displayName": "Check Find",
			"name": "CheckFind",
			"type": "boolean",
			"default": true,
			"description": "Issue a dummy C-FIND command after the C-GET SCU, in order to check whether the remote modality knows about Orthanc. This field defaults to the value of the `DicomEchoChecksFind` configuration option. New in Orthanc 1.8.1.",
			"routing": {
				"send": {
					"property": "CheckFind",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Dicom Echo"
					]
				}
			}
		},
		{
			"displayName": "Host",
			"name": "Host",
			"type": "string",
			"default": "",
			"description": "Host address of the remote DICOM modality (typically, an IP address)",
			"routing": {
				"send": {
					"property": "Host",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Dicom Echo"
					]
				}
			}
		},
		{
			"displayName": "Manufacturer",
			"name": "Manufacturer",
			"type": "string",
			"default": "",
			"description": "Manufacturer of the remote DICOM modality (check configuration option `DicomModalities` for possible values",
			"routing": {
				"send": {
					"property": "Manufacturer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Dicom Echo"
					]
				}
			}
		},
		{
			"displayName": "Port",
			"name": "Port",
			"type": "number",
			"default": 0,
			"description": "TCP port of the remote DICOM modality",
			"routing": {
				"send": {
					"property": "Port",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Dicom Echo"
					]
				}
			}
		},
		{
			"displayName": "Timeout",
			"name": "Timeout",
			"type": "number",
			"default": 0,
			"description": "Timeout for the C-ECHO command, in seconds",
			"routing": {
				"send": {
					"property": "Timeout",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Dicom Echo"
					]
				}
			}
		},
		{
			"displayName": "Use Dicom TLS",
			"name": "UseDicomTls",
			"type": "boolean",
			"default": true,
			"description": "Whether to use DICOM TLS in the SCU connection initiated by Orthanc (new in Orthanc 1.9.0)",
			"routing": {
				"send": {
					"property": "UseDicomTls",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Dicom Echo"
					]
				}
			}
		},
		{
			"displayName": "POST /tools/execute-script",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Execute Script"
					]
				}
			}
		},
		{
			"displayName": "POST /tools/execute-script<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Execute Script"
					]
				}
			}
		},
		{
			"displayName": "POST /tools/find",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Find"
					]
				}
			}
		},
		{
			"displayName": "Case Sensitive",
			"name": "CaseSensitive",
			"type": "boolean",
			"default": true,
			"description": "Enable case-sensitive search for PN value representations (defaults to configuration option `CaseSensitivePN`)",
			"routing": {
				"send": {
					"property": "CaseSensitive",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Find"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "Expand",
			"type": "boolean",
			"default": true,
			"description": "Also retrieve the content of the matching resources, not only their Orthanc identifiers",
			"routing": {
				"send": {
					"property": "Expand",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Find"
					]
				}
			}
		},
		{
			"displayName": "Full",
			"name": "Full",
			"type": "boolean",
			"default": true,
			"description": "If set to `true`, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)",
			"routing": {
				"send": {
					"property": "Full",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Find"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "string",
			"default": "",
			"description": "Level of the query (`Patient`, `Study`, `Series` or `Instance`)",
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Find"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "Limit",
			"type": "number",
			"default": 0,
			"description": "Limit the number of reported resources",
			"routing": {
				"send": {
					"property": "Limit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Find"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "Query",
			"type": "json",
			"default": "{}",
			"description": "Associative array containing the filter on the values of the DICOM tags",
			"routing": {
				"send": {
					"property": "Query",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Find"
					]
				}
			}
		},
		{
			"displayName": "Requested Tags",
			"name": "RequestedTags",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of DICOM tags to include in the response (applicable only if \"Expand\" is set to true).  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return all Main Dicom Tags to keep backward compatibility with Orthanc prior to 1.11.0.",
			"routing": {
				"send": {
					"property": "RequestedTags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Find"
					]
				}
			}
		},
		{
			"displayName": "Short",
			"name": "Short",
			"type": "boolean",
			"default": true,
			"description": "If set to `true`, report the DICOM tags in hexadecimal format",
			"routing": {
				"send": {
					"property": "Short",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Find"
					]
				}
			}
		},
		{
			"displayName": "Since",
			"name": "Since",
			"type": "number",
			"default": 0,
			"description": "Show only the resources since the provided index (in conjunction with `Limit`)",
			"routing": {
				"send": {
					"property": "Since",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Find"
					]
				}
			}
		},
		{
			"displayName": "GET /tools/generate-uid",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"GET Tools Generate Uid"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "level",
			"required": true,
			"description": "Type of DICOM resource among: `patient`, `study`, `series` or `instance`",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "level",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"GET Tools Generate Uid"
					]
				}
			}
		},
		{
			"displayName": "POST /tools/invalidate-tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Invalidate Tags"
					]
				}
			}
		},
		{
			"displayName": "POST /tools/lookup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Lookup"
					]
				}
			}
		},
		{
			"displayName": "POST /tools/lookup<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Lookup"
					]
				}
			}
		},
		{
			"displayName": "GET /tools/metrics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"GET Tools Metrics"
					]
				}
			}
		},
		{
			"displayName": "PUT /tools/metrics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"PUT Tools Metrics"
					]
				}
			}
		},
		{
			"displayName": "PUT /tools/metrics<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"PUT Tools Metrics"
					]
				}
			}
		},
		{
			"displayName": "GET /tools/metrics-prometheus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"GET Tools Metrics Prometheus"
					]
				}
			}
		},
		{
			"displayName": "GET /tools/now",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"GET Tools Now"
					]
				}
			}
		},
		{
			"displayName": "GET /tools/now-local",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"GET Tools Now Local"
					]
				}
			}
		},
		{
			"displayName": "POST /tools/reconstruct",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Reconstruct"
					]
				}
			}
		},
		{
			"displayName": "Reconstruct Files",
			"name": "ReconstructFiles",
			"type": "boolean",
			"default": true,
			"description": "Also reconstruct the files of the resources (e.g: apply IngestTranscoding, StorageCompression). 'false' by default. (New in Orthanc 1.11.0)",
			"routing": {
				"send": {
					"property": "ReconstructFiles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Reconstruct"
					]
				}
			}
		},
		{
			"displayName": "POST /tools/reset",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Reset"
					]
				}
			}
		},
		{
			"displayName": "POST /tools/shutdown",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"POST Tools Shutdown"
					]
				}
			}
		},
		{
			"displayName": "GET /tools/unknown-sop-class-accepted",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"GET Tools Unknown Sop Class Accepted"
					]
				}
			}
		},
		{
			"displayName": "PUT /tools/unknown-sop-class-accepted",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"PUT Tools Unknown Sop Class Accepted"
					]
				}
			}
		},
		{
			"displayName": "PUT /tools/unknown-sop-class-accepted<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"PUT Tools Unknown Sop Class Accepted"
					]
				}
			}
		},
];
