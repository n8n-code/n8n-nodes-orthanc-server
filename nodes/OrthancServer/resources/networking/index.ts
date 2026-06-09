import type { INodeProperties } from 'n8n-workflow';

export const networkingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					]
				}
			},
			"options": [
				{
					"name": "GET Modalities",
					"value": "GET Modalities",
					"action": "List DICOM modalities",
					"description": "List all the DICOM modalities that are known to Orthanc. This corresponds either to the content of the `DicomModalities` configuration option, or to the information stored in the database if `DicomModalitiesInDatabase` is `true`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/modalities"
						}
					}
				},
				{
					"name": "DELETE Modalities",
					"value": "DELETE Modalities",
					"action": "Delete DICOM modality",
					"description": "Delete one DICOM modality. This change is permanent iff. `DicomModalitiesInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/modalities/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "PUT Modalities",
					"value": "PUT Modalities",
					"action": "Update DICOM modality",
					"description": "Define a new DICOM modality, or update an existing one. This change is permanent iff. `DicomModalitiesInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/modalities/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "GET Modalities Configuration",
					"value": "GET Modalities Configuration",
					"action": "Get modality configuration",
					"description": "Get detailed information about the configuration of some DICOM modality",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/modalities/{{$parameter[\"id\"]}}/configuration"
						}
					}
				},
				{
					"name": "POST Modalities Echo",
					"value": "POST Modalities Echo",
					"action": "Trigger C-ECHO SCU",
					"description": "Trigger C-ECHO SCU command against the DICOM modality whose identifier is provided in URL: https://book.orthanc-server.com/users/rest.html#performing-c-echo",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/modalities/{{$parameter[\"id\"]}}/echo"
						}
					}
				},
				{
					"name": "POST Modalities Find Worklist",
					"value": "POST Modalities Find Worklist",
					"action": "C-FIND SCU for worklist",
					"description": "Trigger C-FIND SCU command against the remote worklists of the DICOM modality whose identifier is provided in URL",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/modalities/{{$parameter[\"id\"]}}/find-worklist"
						}
					}
				},
				{
					"name": "POST Modalities Move",
					"value": "POST Modalities Move",
					"action": "Trigger C-MOVE SCU",
					"description": "Start a C-MOVE SCU command as a job, in order to drive the execution of a sequence of C-STORE commands by some remote DICOM modality whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#performing-c-move",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/modalities/{{$parameter[\"id\"]}}/move"
						}
					}
				},
				{
					"name": "POST Modalities Query",
					"value": "POST Modalities Query",
					"action": "Trigger C-FIND SCU",
					"description": "Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL: https://book.orthanc-server.com/users/rest.html#performing-query-retrieve-c-find-and-find-with-rest",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/modalities/{{$parameter[\"id\"]}}/query"
						}
					}
				},
				{
					"name": "POST Modalities Storage Commitment",
					"value": "POST Modalities Storage Commitment",
					"action": "Trigger storage commitment request",
					"description": "Trigger a storage commitment request to some remote DICOM modality whose identifier is provided in the URL: https://book.orthanc-server.com/users/storage-commitment.html#storage-commitment-scu",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/modalities/{{$parameter[\"id\"]}}/storage-commitment"
						}
					}
				},
				{
					"name": "POST Modalities Store",
					"value": "POST Modalities Store",
					"action": "Trigger C-STORE SCU",
					"description": "Start a C-STORE SCU command as a job, in order to send DICOM resources stored locally to some remote DICOM modality whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#rest-store-scu",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/modalities/{{$parameter[\"id\"]}}/store"
						}
					}
				},
				{
					"name": "POST Modalities Store Straight",
					"value": "POST Modalities Store Straight",
					"action": "Straight C-STORE SCU",
					"description": "Synchronously send the DICOM instance in the POST body to the remote DICOM modality whose identifier is provided in URL, without having to first store it locally within Orthanc. This is an alternative to command-line tools such as `storescu` from DCMTK or dcm4che.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/modalities/{{$parameter[\"id\"]}}/store-straight"
						}
					}
				},
				{
					"name": "GET Peers",
					"value": "GET Peers",
					"action": "List Orthanc peers",
					"description": "List all the Orthanc peers that are known to Orthanc. This corresponds either to the content of the `OrthancPeers` configuration option, or to the information stored in the database if `OrthancPeersInDatabase` is `true`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/peers"
						}
					}
				},
				{
					"name": "DELETE Peers",
					"value": "DELETE Peers",
					"action": "Delete Orthanc peer",
					"description": "Delete one Orthanc peer. This change is permanent iff. `OrthancPeersInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/peers/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "PUT Peers",
					"value": "PUT Peers",
					"action": "Update Orthanc peer",
					"description": "Define a new Orthanc peer, or update an existing one. This change is permanent iff. `OrthancPeersInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/peers/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "GET Peers Configuration",
					"value": "GET Peers Configuration",
					"action": "Get peer configuration",
					"description": "Get detailed information about the configuration of some Orthanc peer",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/peers/{{$parameter[\"id\"]}}/configuration"
						}
					}
				},
				{
					"name": "POST Peers Store",
					"value": "POST Peers Store",
					"action": "Send to Orthanc peer",
					"description": "Send DICOM resources stored locally to some remote Orthanc peer whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#sending-one-resource",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/peers/{{$parameter[\"id\"]}}/store"
						}
					}
				},
				{
					"name": "POST Peers Store Straight",
					"value": "POST Peers Store Straight",
					"action": "Straight store to peer",
					"description": "Synchronously send the DICOM instance in the POST body to the Orthanc peer whose identifier is provided in URL, without having to first store it locally within Orthanc. This is an alternative to command-line tools such as `curl`.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/peers/{{$parameter[\"id\"]}}/store-straight"
						}
					}
				},
				{
					"name": "GET Peers System",
					"value": "GET Peers System",
					"action": "Get peer system information",
					"description": "Get system information about some Orthanc peer. This corresponds to doing a `GET` request against the `/system` URI of the remote peer. This route can be used to test connectivity.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/peers/{{$parameter[\"id\"]}}/system"
						}
					}
				},
				{
					"name": "GET Queries",
					"value": "GET Queries",
					"action": "List query/retrieve operations",
					"description": "List the identifiers of all the query/retrieve operations on DICOM modalities, as initiated by calls to `/modalities/{id}/query`. The length of this list is bounded by the `QueryRetrieveSize` configuration option of Orthanc. https://book.orthanc-server.com/users/rest.html#performing-query-retrieve-c-find-and-find-with-rest",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/queries"
						}
					}
				},
				{
					"name": "DELETE Queries",
					"value": "DELETE Queries",
					"action": "Delete a query",
					"description": "Delete the query/retrieve operation whose identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/queries/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "GET Queries Answers",
					"value": "GET Queries Answers",
					"action": "List answers to a query",
					"description": "List the indices of all the available answers resulting from a query/retrieve operation on some DICOM modality, whose identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/queries/{{$parameter[\"id\"]}}/answers"
						}
					}
				},
				{
					"name": "GET Queries Answers Content",
					"value": "GET Queries Answers Content",
					"action": "Get one answer",
					"description": "Get the content (DICOM tags) of one answer associated with the query/retrieve operation whose identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/queries/{{$parameter[\"id\"]}}/answers/{{$parameter[\"index\"]}}/content"
						}
					}
				},
				{
					"name": "POST Queries Answers Query Instances",
					"value": "POST Queries Answers Query Instances",
					"action": "Query the child instances of an answer",
					"description": "Issue a second DICOM C-FIND operation, in order to query the child instances associated with one answer to some query/retrieve operation whose identifiers are provided in the URL",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/queries/{{$parameter[\"id\"]}}/answers/{{$parameter[\"index\"]}}/query-instances"
						}
					}
				},
				{
					"name": "POST Queries Answers Query Series",
					"value": "POST Queries Answers Query Series",
					"action": "Query the child series of an answer",
					"description": "Issue a second DICOM C-FIND operation, in order to query the child series associated with one answer to some query/retrieve operation whose identifiers are provided in the URL",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/queries/{{$parameter[\"id\"]}}/answers/{{$parameter[\"index\"]}}/query-series"
						}
					}
				},
				{
					"name": "POST Queries Answers Query Studies",
					"value": "POST Queries Answers Query Studies",
					"action": "Query the child studies of an answer",
					"description": "Issue a second DICOM C-FIND operation, in order to query the child studies associated with one answer to some query/retrieve operation whose identifiers are provided in the URL",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/queries/{{$parameter[\"id\"]}}/answers/{{$parameter[\"index\"]}}/query-studies"
						}
					}
				},
				{
					"name": "POST Queries Answers Retrieve",
					"value": "POST Queries Answers Retrieve",
					"action": "Retrieve one answer",
					"description": "Start a C-MOVE SCU command as a job, in order to retrieve one answer associated with the query/retrieve operation whose identifiers are provided in the URL: https://book.orthanc-server.com/users/rest.html#performing-retrieve-c-move",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/queries/{{$parameter[\"id\"]}}/answers/{{$parameter[\"index\"]}}/retrieve"
						}
					}
				},
				{
					"name": "GET Queries Level",
					"value": "GET Queries Level",
					"action": "Get level of original query",
					"description": "Get the query level (value of the `QueryRetrieveLevel` tag) of the query/retrieve operation whose identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/queries/{{$parameter[\"id\"]}}/level"
						}
					}
				},
				{
					"name": "GET Queries Modality",
					"value": "GET Queries Modality",
					"action": "Get modality of original query",
					"description": "Get the identifier of the DICOM modality that was targeted by the query/retrieve operation whose identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/queries/{{$parameter[\"id\"]}}/modality"
						}
					}
				},
				{
					"name": "GET Queries Query",
					"value": "GET Queries Query",
					"action": "Get original query arguments",
					"description": "Get the original DICOM filter associated with the query/retrieve operation whose identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/queries/{{$parameter[\"id\"]}}/query"
						}
					}
				},
				{
					"name": "POST Queries Retrieve",
					"value": "POST Queries Retrieve",
					"action": "Retrieve all answers",
					"description": "Start a C-MOVE SCU command as a job, in order to retrieve all the answers associated with the query/retrieve operation whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#performing-retrieve-c-move",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/queries/{{$parameter[\"id\"]}}/retrieve"
						}
					}
				},
				{
					"name": "GET Storage Commitment",
					"value": "GET Storage Commitment",
					"action": "Get storage commitment report",
					"description": "Get the storage commitment report whose identifier is provided in the URL: https://book.orthanc-server.com/users/storage-commitment.html#storage-commitment-scu",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/storage-commitment/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "POST Storage Commitment Remove",
					"value": "POST Storage Commitment Remove",
					"action": "Remove after storage commitment",
					"description": "Remove out of Orthanc, the DICOM instances that have been reported to have been properly received the storage commitment report whose identifier is provided in the URL. This is only possible if the `Status` of the storage commitment report is `Success`. https://book.orthanc-server.com/users/storage-commitment.html#removing-the-instances",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/storage-commitment/{{$parameter[\"id\"]}}/remove"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /modalities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Modalities"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "expand",
			"description": "If present, retrieve detailed information about the individual DICOM modalities",
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
						"Networking"
					],
					"operation": [
						"GET Modalities"
					]
				}
			}
		},
		{
			"displayName": "DELETE /modalities/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"DELETE Modalities"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the DICOM modality of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"DELETE Modalities"
					]
				}
			}
		},
		{
			"displayName": "PUT /modalities/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"PUT Modalities"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the new/updated DICOM modality",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"PUT Modalities"
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
						"Networking"
					],
					"operation": [
						"PUT Modalities"
					]
				}
			}
		},
		{
			"displayName": "Allow Echo",
			"name": "AllowEcho",
			"type": "boolean",
			"default": true,
			"description": "Whether to accept C-ECHO SCU commands issued by the remote modality",
			"routing": {
				"send": {
					"property": "AllowEcho",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"PUT Modalities"
					]
				}
			}
		},
		{
			"displayName": "Allow Find",
			"name": "AllowFind",
			"type": "boolean",
			"default": true,
			"description": "Whether to accept C-FIND SCU commands issued by the remote modality",
			"routing": {
				"send": {
					"property": "AllowFind",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"PUT Modalities"
					]
				}
			}
		},
		{
			"displayName": "Allow Find Worklist",
			"name": "AllowFindWorklist",
			"type": "boolean",
			"default": true,
			"description": "Whether to accept C-FIND SCU commands for worklists issued by the remote modality",
			"routing": {
				"send": {
					"property": "AllowFindWorklist",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"PUT Modalities"
					]
				}
			}
		},
		{
			"displayName": "Allow Get",
			"name": "AllowGet",
			"type": "boolean",
			"default": true,
			"description": "Whether to accept C-GET SCU commands issued by the remote modality",
			"routing": {
				"send": {
					"property": "AllowGet",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"PUT Modalities"
					]
				}
			}
		},
		{
			"displayName": "Allow Move",
			"name": "AllowMove",
			"type": "boolean",
			"default": true,
			"description": "Whether to accept C-MOVE SCU commands issued by the remote modality",
			"routing": {
				"send": {
					"property": "AllowMove",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"PUT Modalities"
					]
				}
			}
		},
		{
			"displayName": "Allow Storage Commitment",
			"name": "AllowStorageCommitment",
			"type": "boolean",
			"default": true,
			"description": "Whether to accept storage commitment requests issued by the remote modality",
			"routing": {
				"send": {
					"property": "AllowStorageCommitment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"PUT Modalities"
					]
				}
			}
		},
		{
			"displayName": "Allow Store",
			"name": "AllowStore",
			"type": "boolean",
			"default": true,
			"description": "Whether to accept C-STORE SCU commands issued by the remote modality",
			"routing": {
				"send": {
					"property": "AllowStore",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"PUT Modalities"
					]
				}
			}
		},
		{
			"displayName": "Allow Transcoding",
			"name": "AllowTranscoding",
			"type": "boolean",
			"default": true,
			"description": "Whether to allow transcoding for operations initiated by this modality. This option applies to Orthanc C-GET SCP and to Orthanc C-STORE SCU. It only has an effect if the global option `EnableTranscoding` is set to `true`.",
			"routing": {
				"send": {
					"property": "AllowTranscoding",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"PUT Modalities"
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
						"Networking"
					],
					"operation": [
						"PUT Modalities"
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
						"Networking"
					],
					"operation": [
						"PUT Modalities"
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
						"Networking"
					],
					"operation": [
						"PUT Modalities"
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
						"Networking"
					],
					"operation": [
						"PUT Modalities"
					]
				}
			}
		},
		{
			"displayName": "GET /modalities/{id}/configuration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Modalities Configuration"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the modality of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Modalities Configuration"
					]
				}
			}
		},
		{
			"displayName": "POST /modalities/{id}/echo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Modalities Echo"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the modality of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Modalities Echo"
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
						"Networking"
					],
					"operation": [
						"POST Modalities Echo"
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
						"Networking"
					],
					"operation": [
						"POST Modalities Echo"
					]
				}
			}
		},
		{
			"displayName": "POST /modalities/{id}/find-worklist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Modalities Find Worklist"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the modality of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Modalities Find Worklist"
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
						"Networking"
					],
					"operation": [
						"POST Modalities Find Worklist"
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
						"Networking"
					],
					"operation": [
						"POST Modalities Find Worklist"
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
						"Networking"
					],
					"operation": [
						"POST Modalities Find Worklist"
					]
				}
			}
		},
		{
			"displayName": "POST /modalities/{id}/move",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Modalities Move"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the modality of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Modalities Move"
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
						"Networking"
					],
					"operation": [
						"POST Modalities Move"
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
						"Networking"
					],
					"operation": [
						"POST Modalities Move"
					]
				}
			}
		},
		{
			"displayName": "Local Aet",
			"name": "LocalAet",
			"type": "string",
			"default": "",
			"description": "Local AET that is used for this commands, defaults to `DicomAet` configuration option. Ignored if `DicomModalities` already sets `LocalAet` for this modality.",
			"routing": {
				"send": {
					"property": "LocalAet",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Modalities Move"
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
						"Networking"
					],
					"operation": [
						"POST Modalities Move"
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
						"Networking"
					],
					"operation": [
						"POST Modalities Move"
					]
				}
			}
		},
		{
			"displayName": "Resources",
			"name": "Resources",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of queries identifying all the DICOM resources to be sent",
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
						"Networking"
					],
					"operation": [
						"POST Modalities Move"
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
						"Networking"
					],
					"operation": [
						"POST Modalities Move"
					]
				}
			}
		},
		{
			"displayName": "Target Aet",
			"name": "TargetAet",
			"type": "string",
			"default": "",
			"description": "Target AET that will be used by the remote DICOM modality as a target for its C-STORE SCU commands, defaults to `DicomAet` configuration option in order to do a simple query/retrieve",
			"routing": {
				"send": {
					"property": "TargetAet",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Modalities Move"
					]
				}
			}
		},
		{
			"displayName": "Timeout",
			"name": "Timeout",
			"type": "number",
			"default": 0,
			"description": "Timeout for the C-MOVE command, in seconds",
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
						"Networking"
					],
					"operation": [
						"POST Modalities Move"
					]
				}
			}
		},
		{
			"displayName": "POST /modalities/{id}/query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Modalities Query"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the modality of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Modalities Query"
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
						"Networking"
					],
					"operation": [
						"POST Modalities Query"
					]
				}
			}
		},
		{
			"displayName": "Local Aet",
			"name": "LocalAet",
			"type": "string",
			"default": "",
			"description": "Local AET that is used for this commands, defaults to `DicomAet` configuration option. Ignored if `DicomModalities` already sets `LocalAet` for this modality.",
			"routing": {
				"send": {
					"property": "LocalAet",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Modalities Query"
					]
				}
			}
		},
		{
			"displayName": "Normalize",
			"name": "Normalize",
			"type": "boolean",
			"default": true,
			"description": "Whether to normalize the query, i.e. whether to wipe out from the query, the DICOM tags that are not applicable for the query-retrieve level of interest",
			"routing": {
				"send": {
					"property": "Normalize",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Modalities Query"
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
						"Networking"
					],
					"operation": [
						"POST Modalities Query"
					]
				}
			}
		},
		{
			"displayName": "Timeout",
			"name": "Timeout",
			"type": "number",
			"default": 0,
			"description": "Timeout for the C-FIND command and subsequent C-MOVE retrievals, in seconds (new in Orthanc 1.9.1)",
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
						"Networking"
					],
					"operation": [
						"POST Modalities Query"
					]
				}
			}
		},
		{
			"displayName": "POST /modalities/{id}/storage-commitment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Modalities Storage Commitment"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the modality of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Modalities Storage Commitment"
					]
				}
			}
		},
		{
			"displayName": "Dicom Instances",
			"name": "DicomInstances",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of DICOM resources that are not necessarily stored within Orthanc, but that must be checked by storage commitment. This is a list of JSON objects that must contain the `SOPClassUID` and `SOPInstanceUID` fields.",
			"routing": {
				"send": {
					"property": "DicomInstances",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Modalities Storage Commitment"
					]
				}
			}
		},
		{
			"displayName": "Resources",
			"name": "Resources",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of the Orthanc identifiers of the DICOM resources to be checked by storage commitment",
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
						"Networking"
					],
					"operation": [
						"POST Modalities Storage Commitment"
					]
				}
			}
		},
		{
			"displayName": "Timeout",
			"name": "Timeout",
			"type": "number",
			"default": 0,
			"description": "Timeout for the storage commitment command (new in Orthanc 1.9.1)",
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
						"Networking"
					],
					"operation": [
						"POST Modalities Storage Commitment"
					]
				}
			}
		},
		{
			"displayName": "POST /modalities/{id}/store",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Modalities Store"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the modality of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Modalities Store"
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
						"Networking"
					],
					"operation": [
						"POST Modalities Store"
					]
				}
			}
		},
		{
			"displayName": "Called Aet",
			"name": "CalledAet",
			"type": "string",
			"default": "",
			"description": "Called AET that is used for this commands, defaults to `AET` configuration option. Allows you to overwrite the destination AET for a specific operation.",
			"routing": {
				"send": {
					"property": "CalledAet",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Modalities Store"
					]
				}
			}
		},
		{
			"displayName": "Host",
			"name": "Host",
			"type": "string",
			"default": "",
			"description": "Host that is used for this commands, defaults to `Host` configuration option. Allows you to overwrite the destination host for a specific operation.",
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
						"Networking"
					],
					"operation": [
						"POST Modalities Store"
					]
				}
			}
		},
		{
			"displayName": "Local Aet",
			"name": "LocalAet",
			"type": "string",
			"default": "",
			"description": "Local AET that is used for this commands, defaults to `DicomAet` configuration option. Ignored if `DicomModalities` already sets `LocalAet` for this modality.",
			"routing": {
				"send": {
					"property": "LocalAet",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Modalities Store"
					]
				}
			}
		},
		{
			"displayName": "Move Originator Aet",
			"name": "MoveOriginatorAet",
			"type": "string",
			"default": "",
			"description": "Move originator AET that is used for this commands, in order to fake a C-MOVE SCU",
			"routing": {
				"send": {
					"property": "MoveOriginatorAet",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Modalities Store"
					]
				}
			}
		},
		{
			"displayName": "Move Originator ID",
			"name": "MoveOriginatorID",
			"type": "number",
			"default": 0,
			"description": "Move originator ID that is used for this commands, in order to fake a C-MOVE SCU",
			"routing": {
				"send": {
					"property": "MoveOriginatorID",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Modalities Store"
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
						"Networking"
					],
					"operation": [
						"POST Modalities Store"
					]
				}
			}
		},
		{
			"displayName": "Port",
			"name": "Port",
			"type": "number",
			"default": 0,
			"description": "Port that is used for this commands, defaults to `Port` configuration option. Allows you to overwrite the destination port for a specific operation.",
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
						"Networking"
					],
					"operation": [
						"POST Modalities Store"
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
						"Networking"
					],
					"operation": [
						"POST Modalities Store"
					]
				}
			}
		},
		{
			"displayName": "Resources",
			"name": "Resources",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of the Orthanc identifiers of all the DICOM resources to be sent",
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
						"Networking"
					],
					"operation": [
						"POST Modalities Store"
					]
				}
			}
		},
		{
			"displayName": "Storage Commitment",
			"name": "StorageCommitment",
			"type": "boolean",
			"default": true,
			"description": "Whether to chain C-STORE with DICOM storage commitment to validate the success of the transmission: https://book.orthanc-server.com/users/storage-commitment.html#chaining-c-store-with-storage-commitment",
			"routing": {
				"send": {
					"property": "StorageCommitment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Modalities Store"
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
						"Networking"
					],
					"operation": [
						"POST Modalities Store"
					]
				}
			}
		},
		{
			"displayName": "Timeout",
			"name": "Timeout",
			"type": "number",
			"default": 0,
			"description": "Timeout for the C-STORE command, in seconds",
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
						"Networking"
					],
					"operation": [
						"POST Modalities Store"
					]
				}
			}
		},
		{
			"displayName": "POST /modalities/{id}/store-straight",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Modalities Store Straight"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the modality of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Modalities Store Straight"
					]
				}
			}
		},
		{
			"displayName": "POST /modalities/{id}/store-straight<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Modalities Store Straight"
					]
				}
			}
		},
		{
			"displayName": "GET /peers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Peers"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "expand",
			"description": "If present, retrieve detailed information about the individual Orthanc peers",
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
						"Networking"
					],
					"operation": [
						"GET Peers"
					]
				}
			}
		},
		{
			"displayName": "DELETE /peers/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"DELETE Peers"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the Orthanc peer of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"DELETE Peers"
					]
				}
			}
		},
		{
			"displayName": "PUT /peers/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"PUT Peers"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the new/updated Orthanc peer",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"PUT Peers"
					]
				}
			}
		},
		{
			"displayName": "Certificate File",
			"name": "CertificateFile",
			"type": "string",
			"default": "",
			"description": "SSL certificate for the HTTPS connections",
			"routing": {
				"send": {
					"property": "CertificateFile",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"PUT Peers"
					]
				}
			}
		},
		{
			"displayName": "Certificate Key File",
			"name": "CertificateKeyFile",
			"type": "string",
			"default": "",
			"description": "Key file for the SSL certificate for the HTTPS connections",
			"routing": {
				"send": {
					"property": "CertificateKeyFile",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"PUT Peers"
					]
				}
			}
		},
		{
			"displayName": "Certificate Key Password",
			"name": "CertificateKeyPassword",
			"type": "string",
			"default": "",
			"description": "Key password for the SSL certificate for the HTTPS connections",
			"routing": {
				"send": {
					"property": "CertificateKeyPassword",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"PUT Peers"
					]
				}
			}
		},
		{
			"displayName": "HTTP Headers",
			"name": "HttpHeaders",
			"type": "json",
			"default": "{}",
			"description": "HTTP headers to be used for the connections to the remote peer",
			"routing": {
				"send": {
					"property": "HttpHeaders",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"PUT Peers"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "Password",
			"type": "string",
			"default": "",
			"description": "Password for the credentials",
			"routing": {
				"send": {
					"property": "Password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"PUT Peers"
					]
				}
			}
		},
		{
			"displayName": "URL",
			"name": "URL",
			"type": "string",
			"default": "",
			"description": "URL of the root of the REST API of the remote Orthanc peer, for instance `http://localhost:8042/`",
			"routing": {
				"send": {
					"property": "URL",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"PUT Peers"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "Username",
			"type": "string",
			"default": "",
			"description": "Username for the credentials",
			"routing": {
				"send": {
					"property": "Username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"PUT Peers"
					]
				}
			}
		},
		{
			"displayName": "GET /peers/{id}/configuration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Peers Configuration"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the peer of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Peers Configuration"
					]
				}
			}
		},
		{
			"displayName": "POST /peers/{id}/store",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Peers Store"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the modality of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Peers Store"
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
						"Networking"
					],
					"operation": [
						"POST Peers Store"
					]
				}
			}
		},
		{
			"displayName": "Compress",
			"name": "Compress",
			"type": "boolean",
			"default": true,
			"description": "Whether to compress the DICOM instances using gzip before the actual sending",
			"routing": {
				"send": {
					"property": "Compress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Peers Store"
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
						"Networking"
					],
					"operation": [
						"POST Peers Store"
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
						"Networking"
					],
					"operation": [
						"POST Peers Store"
					]
				}
			}
		},
		{
			"displayName": "Resources",
			"name": "Resources",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of the Orthanc identifiers of all the DICOM resources to be sent",
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
						"Networking"
					],
					"operation": [
						"POST Peers Store"
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
						"Networking"
					],
					"operation": [
						"POST Peers Store"
					]
				}
			}
		},
		{
			"displayName": "Transcode",
			"name": "Transcode",
			"type": "string",
			"default": "",
			"description": "Transcode to the provided DICOM transfer syntax before the actual sending",
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
						"Networking"
					],
					"operation": [
						"POST Peers Store"
					]
				}
			}
		},
		{
			"displayName": "POST /peers/{id}/store-straight",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Peers Store Straight"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the modality of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Peers Store Straight"
					]
				}
			}
		},
		{
			"displayName": "POST /peers/{id}/store-straight<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Peers Store Straight"
					]
				}
			}
		},
		{
			"displayName": "GET /peers/{id}/system",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Peers System"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the peer of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Peers System"
					]
				}
			}
		},
		{
			"displayName": "GET /queries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Queries"
					]
				}
			}
		},
		{
			"displayName": "DELETE /queries/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"DELETE Queries"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the query of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"DELETE Queries"
					]
				}
			}
		},
		{
			"displayName": "GET /queries/{id}/answers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Queries Answers"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "expand",
			"description": "If present, retrieve detailed information about the individual answers",
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
						"Networking"
					],
					"operation": [
						"GET Queries Answers"
					]
				}
			}
		},
		{
			"displayName": "Short",
			"name": "short",
			"description": "If present, report the DICOM tags in hexadecimal format",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "short",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Queries Answers"
					]
				}
			}
		},
		{
			"displayName": "Simplify",
			"name": "simplify",
			"description": "If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "simplify",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Queries Answers"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the query of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Queries Answers"
					]
				}
			}
		},
		{
			"displayName": "GET /queries/{id}/answers/{index}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Queries Answers Content"
					]
				}
			}
		},
		{
			"displayName": "Short",
			"name": "short",
			"description": "If present, report the DICOM tags in hexadecimal format",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "short",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Queries Answers Content"
					]
				}
			}
		},
		{
			"displayName": "Simplify",
			"name": "simplify",
			"description": "If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "simplify",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Queries Answers Content"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the query of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Queries Answers Content"
					]
				}
			}
		},
		{
			"displayName": "Index",
			"name": "index",
			"required": true,
			"description": "Index of the answer",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Queries Answers Content"
					]
				}
			}
		},
		{
			"displayName": "POST /queries/{id}/answers/{index}/query-instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Queries Answers Query Instances"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the query of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Queries Answers Query Instances"
					]
				}
			}
		},
		{
			"displayName": "Index",
			"name": "index",
			"required": true,
			"description": "Index of the answer",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Queries Answers Query Instances"
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
						"Networking"
					],
					"operation": [
						"POST Queries Answers Query Instances"
					]
				}
			}
		},
		{
			"displayName": "Timeout",
			"name": "Timeout",
			"type": "number",
			"default": 0,
			"description": "Timeout for the C-FIND command, in seconds (new in Orthanc 1.9.1)",
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
						"Networking"
					],
					"operation": [
						"POST Queries Answers Query Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /queries/{id}/answers/{index}/query-series",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Queries Answers Query Series"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the query of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Queries Answers Query Series"
					]
				}
			}
		},
		{
			"displayName": "Index",
			"name": "index",
			"required": true,
			"description": "Index of the answer",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Queries Answers Query Series"
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
						"Networking"
					],
					"operation": [
						"POST Queries Answers Query Series"
					]
				}
			}
		},
		{
			"displayName": "Timeout",
			"name": "Timeout",
			"type": "number",
			"default": 0,
			"description": "Timeout for the C-FIND command, in seconds (new in Orthanc 1.9.1)",
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
						"Networking"
					],
					"operation": [
						"POST Queries Answers Query Series"
					]
				}
			}
		},
		{
			"displayName": "POST /queries/{id}/answers/{index}/query-studies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Queries Answers Query Studies"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the query of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Queries Answers Query Studies"
					]
				}
			}
		},
		{
			"displayName": "Index",
			"name": "index",
			"required": true,
			"description": "Index of the answer",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Queries Answers Query Studies"
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
						"Networking"
					],
					"operation": [
						"POST Queries Answers Query Studies"
					]
				}
			}
		},
		{
			"displayName": "Timeout",
			"name": "Timeout",
			"type": "number",
			"default": 0,
			"description": "Timeout for the C-FIND command, in seconds (new in Orthanc 1.9.1)",
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
						"Networking"
					],
					"operation": [
						"POST Queries Answers Query Studies"
					]
				}
			}
		},
		{
			"displayName": "POST /queries/{id}/answers/{index}/retrieve",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Queries Answers Retrieve"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the query of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Queries Answers Retrieve"
					]
				}
			}
		},
		{
			"displayName": "Index",
			"name": "index",
			"required": true,
			"description": "Index of the answer",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Queries Answers Retrieve"
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
						"Networking"
					],
					"operation": [
						"POST Queries Answers Retrieve"
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
						"Networking"
					],
					"operation": [
						"POST Queries Answers Retrieve"
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
						"Networking"
					],
					"operation": [
						"POST Queries Answers Retrieve"
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
						"Networking"
					],
					"operation": [
						"POST Queries Answers Retrieve"
					]
				}
			}
		},
		{
			"displayName": "Simplify",
			"name": "Simplify",
			"type": "boolean",
			"default": true,
			"description": "If set to `true`, report the DICOM tags in human-readable format (using the symbolic name of the tags)",
			"routing": {
				"send": {
					"property": "Simplify",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Queries Answers Retrieve"
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
						"Networking"
					],
					"operation": [
						"POST Queries Answers Retrieve"
					]
				}
			}
		},
		{
			"displayName": "Target Aet",
			"name": "TargetAet",
			"type": "string",
			"default": "",
			"description": "AET of the target modality. By default, the AET of Orthanc is used, as defined in the `DicomAet` configuration option.",
			"routing": {
				"send": {
					"property": "TargetAet",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Queries Answers Retrieve"
					]
				}
			}
		},
		{
			"displayName": "Timeout",
			"name": "Timeout",
			"type": "number",
			"default": 0,
			"description": "Timeout for the C-MOVE command, in seconds",
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
						"Networking"
					],
					"operation": [
						"POST Queries Answers Retrieve"
					]
				}
			}
		},
		{
			"displayName": "GET /queries/{id}/level",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Queries Level"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the query of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Queries Level"
					]
				}
			}
		},
		{
			"displayName": "GET /queries/{id}/modality",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Queries Modality"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the query of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Queries Modality"
					]
				}
			}
		},
		{
			"displayName": "GET /queries/{id}/query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Queries Query"
					]
				}
			}
		},
		{
			"displayName": "Short",
			"name": "short",
			"description": "If present, report the DICOM tags in hexadecimal format",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "short",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Queries Query"
					]
				}
			}
		},
		{
			"displayName": "Simplify",
			"name": "simplify",
			"description": "If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "simplify",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Queries Query"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the query of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Queries Query"
					]
				}
			}
		},
		{
			"displayName": "POST /queries/{id}/retrieve",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Queries Retrieve"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the query of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Queries Retrieve"
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
						"Networking"
					],
					"operation": [
						"POST Queries Retrieve"
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
						"Networking"
					],
					"operation": [
						"POST Queries Retrieve"
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
						"Networking"
					],
					"operation": [
						"POST Queries Retrieve"
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
						"Networking"
					],
					"operation": [
						"POST Queries Retrieve"
					]
				}
			}
		},
		{
			"displayName": "Simplify",
			"name": "Simplify",
			"type": "boolean",
			"default": true,
			"description": "If set to `true`, report the DICOM tags in human-readable format (using the symbolic name of the tags)",
			"routing": {
				"send": {
					"property": "Simplify",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Queries Retrieve"
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
						"Networking"
					],
					"operation": [
						"POST Queries Retrieve"
					]
				}
			}
		},
		{
			"displayName": "Target Aet",
			"name": "TargetAet",
			"type": "string",
			"default": "",
			"description": "AET of the target modality. By default, the AET of Orthanc is used, as defined in the `DicomAet` configuration option.",
			"routing": {
				"send": {
					"property": "TargetAet",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Queries Retrieve"
					]
				}
			}
		},
		{
			"displayName": "Timeout",
			"name": "Timeout",
			"type": "number",
			"default": 0,
			"description": "Timeout for the C-MOVE command, in seconds",
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
						"Networking"
					],
					"operation": [
						"POST Queries Retrieve"
					]
				}
			}
		},
		{
			"displayName": "GET /storage-commitment/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Storage Commitment"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the storage commitment report",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"GET Storage Commitment"
					]
				}
			}
		},
		{
			"displayName": "POST /storage-commitment/{id}/remove",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Storage Commitment Remove"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Identifier of the storage commitment report",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"POST Storage Commitment Remove"
					]
				}
			}
		},
];
