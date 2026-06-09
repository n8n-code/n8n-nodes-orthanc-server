import type { INodeProperties } from 'n8n-workflow';

export const patientsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					]
				}
			},
			"options": [
				{
					"name": "GET Patients",
					"value": "GET Patients",
					"action": "List the available patients",
					"description": "List the Orthanc identifiers of all the available DICOM patients",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patients"
						}
					}
				},
				{
					"name": "DELETE Patients",
					"value": "DELETE Patients",
					"action": "Delete some patient",
					"description": "Delete the DICOM patient whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/patients/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "POST Patients Anonymize",
					"value": "POST Patients Anonymize",
					"action": "Anonymize patient",
					"description": "Start a job that will anonymize all the DICOM instances within the patient whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new patient, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#anonymization-of-patients-studies-or-series",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/patients/{{$parameter[\"id\"]}}/anonymize"
						}
					}
				},
				{
					"name": "GET Patients Archive",
					"value": "GET Patients Archive",
					"action": "Create ZIP archive",
					"description": "Synchronously create a ZIP archive containing the DICOM patient whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patients/{{$parameter[\"id\"]}}/archive"
						}
					}
				},
				{
					"name": "POST Patients Archive",
					"value": "POST Patients Archive",
					"action": "Create ZIP archive",
					"description": "Create a ZIP archive containing the DICOM patient whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/patients/{{$parameter[\"id\"]}}/archive"
						}
					}
				},
				{
					"name": "GET Patients Attachments",
					"value": "GET Patients Attachments",
					"action": "List attachments",
					"description": "Get the list of attachments that are associated with the given patient",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patients/{{$parameter[\"id\"]}}/attachments"
						}
					}
				},
				{
					"name": "DELETE Patients Attachments",
					"value": "DELETE Patients Attachments",
					"action": "Delete attachment",
					"description": "Delete an attachment associated with the given DICOM patient. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/patients/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}"
						}
					}
				},
				{
					"name": "PUT Patients Attachments",
					"value": "PUT Patients Attachments",
					"action": "Set attachment",
					"description": "Attach a file to the given DICOM patient. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/patients/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}"
						}
					}
				},
				{
					"name": "POST Patients Attachments Compress",
					"value": "POST Patients Attachments Compress",
					"action": "Compress attachment",
					"description": "Change the compression scheme that is used to store an attachment.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/patients/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/compress"
						}
					}
				},
				{
					"name": "GET Patients Attachments Compressed Data",
					"value": "GET Patients Attachments Compressed Data",
					"action": "Get attachment (no decompression)",
					"description": "Get the (binary) content of one attachment associated with the given patient. The attachment will not be decompressed if `StorageCompression` is `true`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patients/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/compressed-data"
						}
					}
				},
				{
					"name": "GET Patients Attachments Compressed Md 5",
					"value": "GET Patients Attachments Compressed Md 5",
					"action": "Get MD5 of attachment on disk",
					"description": "Get the MD5 hash of one attachment associated with the given patient, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patients/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/compressed-md5"
						}
					}
				},
				{
					"name": "GET Patients Attachments Compressed Size",
					"value": "GET Patients Attachments Compressed Size",
					"action": "Get size of attachment on disk",
					"description": "Get the size of one attachment associated with the given patient, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patients/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/compressed-size"
						}
					}
				},
				{
					"name": "GET Patients Attachments Data",
					"value": "GET Patients Attachments Data",
					"action": "Get attachment",
					"description": "Get the (binary) content of one attachment associated with the given patient",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patients/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/data"
						}
					}
				},
				{
					"name": "GET Patients Attachments Info",
					"value": "GET Patients Attachments Info",
					"action": "Get info about the attachment",
					"description": "Get all the information about the attachment associated with the given patient",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patients/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/info"
						}
					}
				},
				{
					"name": "GET Patients Attachments Is Compressed",
					"value": "GET Patients Attachments Is Compressed",
					"action": "Is attachment compressed?",
					"description": "Test whether the attachment has been stored as a compressed file on the disk.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patients/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/is-compressed"
						}
					}
				},
				{
					"name": "GET Patients Attachments Md 5",
					"value": "GET Patients Attachments Md 5",
					"action": "Get MD5 of attachment",
					"description": "Get the MD5 hash of one attachment associated with the given patient",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patients/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/md5"
						}
					}
				},
				{
					"name": "GET Patients Attachments Size",
					"value": "GET Patients Attachments Size",
					"action": "Get size of attachment",
					"description": "Get the size of one attachment associated with the given patient",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patients/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/size"
						}
					}
				},
				{
					"name": "POST Patients Attachments Uncompress",
					"value": "POST Patients Attachments Uncompress",
					"action": "Uncompress attachment",
					"description": "Change the compression scheme that is used to store an attachment.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/patients/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/uncompress"
						}
					}
				},
				{
					"name": "POST Patients Attachments Verify Md 5",
					"value": "POST Patients Attachments Verify Md 5",
					"action": "Verify attachment",
					"description": "Verify that the attachment is not corrupted, by validating its MD5 hash",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/patients/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/verify-md5"
						}
					}
				},
				{
					"name": "GET Patients Instances",
					"value": "GET Patients Instances",
					"action": "Get child instances",
					"description": "Get detailed information about the child instances of the DICOM patient whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patients/{{$parameter[\"id\"]}}/instances"
						}
					}
				},
				{
					"name": "GET Patients Instances Tags",
					"value": "GET Patients Instances Tags",
					"action": "Get tags of instances",
					"description": "Get the tags of all the child instances of the DICOM patient whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patients/{{$parameter[\"id\"]}}/instances-tags"
						}
					}
				},
				{
					"name": "GET Patients Media",
					"value": "GET Patients Media",
					"action": "Create DICOMDIR media",
					"description": "Synchronously create a DICOMDIR media containing the DICOM patient whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patients/{{$parameter[\"id\"]}}/media"
						}
					}
				},
				{
					"name": "POST Patients Media",
					"value": "POST Patients Media",
					"action": "Create DICOMDIR media",
					"description": "Create a DICOMDIR media containing the DICOM patient whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/patients/{{$parameter[\"id\"]}}/media"
						}
					}
				},
				{
					"name": "GET Patients Metadata",
					"value": "GET Patients Metadata",
					"action": "List metadata",
					"description": "Get the list of metadata that are associated with the given patient",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patients/{{$parameter[\"id\"]}}/metadata"
						}
					}
				},
				{
					"name": "DELETE Patients Metadata",
					"value": "DELETE Patients Metadata",
					"action": "Delete metadata",
					"description": "Delete some metadata associated with the given DICOM patient. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/patients/{{$parameter[\"id\"]}}/metadata/{{$parameter[\"name\"]}}"
						}
					}
				},
				{
					"name": "PUT Patients Metadata",
					"value": "PUT Patients Metadata",
					"action": "Set metadata",
					"description": "Set the value of some metadata in the given DICOM patient. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/patients/{{$parameter[\"id\"]}}/metadata/{{$parameter[\"name\"]}}"
						}
					}
				},
				{
					"name": "POST Patients Modify",
					"value": "POST Patients Modify",
					"action": "Modify patient",
					"description": "Start a job that will modify all the DICOM instances within the patient whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new patient, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#modification-of-studies-or-series",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/patients/{{$parameter[\"id\"]}}/modify"
						}
					}
				},
				{
					"name": "GET Patients Module",
					"value": "GET Patients Module",
					"action": "Get patient module",
					"description": "Get the patient module of the DICOM patient whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patients/{{$parameter[\"id\"]}}/module"
						}
					}
				},
				{
					"name": "GET Patients Protected",
					"value": "GET Patients Protected",
					"action": "Is the patient protected against recycling?",
					"description": "Is the patient protected against recycling?",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patients/{{$parameter[\"id\"]}}/protected"
						}
					}
				},
				{
					"name": "PUT Patients Protected",
					"value": "PUT Patients Protected",
					"action": "Protect one patient against recycling",
					"description": "Check out configuration options `MaximumStorageSize` and `MaximumPatientCount`",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/patients/{{$parameter[\"id\"]}}/protected"
						}
					}
				},
				{
					"name": "POST Patients Reconstruct",
					"value": "POST Patients Reconstruct",
					"action": "Reconstruct tags & optionally files of patient",
					"description": "Reconstruct the main DICOM tags in DB of the patient whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/patients/{{$parameter[\"id\"]}}/reconstruct"
						}
					}
				},
				{
					"name": "GET Patients Series",
					"value": "GET Patients Series",
					"action": "Get child series",
					"description": "Get detailed information about the child series of the DICOM patient whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patients/{{$parameter[\"id\"]}}/series"
						}
					}
				},
				{
					"name": "GET Patients Shared Tags",
					"value": "GET Patients Shared Tags",
					"action": "Get shared tags",
					"description": "Extract the DICOM tags whose value is constant across all the child instances of the DICOM patient whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patients/{{$parameter[\"id\"]}}/shared-tags"
						}
					}
				},
				{
					"name": "GET Patients Statistics",
					"value": "GET Patients Statistics",
					"action": "Get patient statistics",
					"description": "Get statistics about the given patient",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patients/{{$parameter[\"id\"]}}/statistics"
						}
					}
				},
				{
					"name": "GET Patients Studies",
					"value": "GET Patients Studies",
					"action": "Get child studies",
					"description": "Get detailed information about the child studies of the DICOM patient whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patients/{{$parameter[\"id\"]}}/studies"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /patients",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "expand",
			"description": "If present, retrieve detailed information about the individual patients",
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
						"Patients"
					],
					"operation": [
						"GET Patients"
					]
				}
			}
		},
		{
			"displayName": "Full",
			"name": "full",
			"description": "If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "full",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients"
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
						"Patients"
					],
					"operation": [
						"GET Patients"
					]
				}
			}
		},
		{
			"displayName": "Requested Tags",
			"name": "requestedTags",
			"description": "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "requestedTags",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients"
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
						"Patients"
					],
					"operation": [
						"GET Patients"
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
						"Patients"
					],
					"operation": [
						"GET Patients"
					]
				}
			}
		},
		{
			"displayName": "DELETE /patients/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"DELETE Patients"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"DELETE Patients"
					]
				}
			}
		},
		{
			"displayName": "POST /patients/{id}/anonymize",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"POST Patients Anonymize"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"POST Patients Anonymize"
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
						"Patients"
					],
					"operation": [
						"POST Patients Anonymize"
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
						"Patients"
					],
					"operation": [
						"POST Patients Anonymize"
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
						"Patients"
					],
					"operation": [
						"POST Patients Anonymize"
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
						"Patients"
					],
					"operation": [
						"POST Patients Anonymize"
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
						"Patients"
					],
					"operation": [
						"POST Patients Anonymize"
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
						"Patients"
					],
					"operation": [
						"POST Patients Anonymize"
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
						"Patients"
					],
					"operation": [
						"POST Patients Anonymize"
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
						"Patients"
					],
					"operation": [
						"POST Patients Anonymize"
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
						"Patients"
					],
					"operation": [
						"POST Patients Anonymize"
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
						"Patients"
					],
					"operation": [
						"POST Patients Anonymize"
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
						"Patients"
					],
					"operation": [
						"POST Patients Anonymize"
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
						"Patients"
					],
					"operation": [
						"POST Patients Anonymize"
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
						"Patients"
					],
					"operation": [
						"POST Patients Anonymize"
					]
				}
			}
		},
		{
			"displayName": "GET /patients/{id}/archive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Archive"
					]
				}
			}
		},
		{
			"displayName": "Filename",
			"name": "filename",
			"description": "Filename to set in the \"Content-Disposition\" HTTP header (including file extension)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filename",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Archive"
					]
				}
			}
		},
		{
			"displayName": "Transcode",
			"name": "transcode",
			"description": "If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "transcode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Archive"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Archive"
					]
				}
			}
		},
		{
			"displayName": "POST /patients/{id}/archive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"POST Patients Archive"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"POST Patients Archive"
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
						"Patients"
					],
					"operation": [
						"POST Patients Archive"
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
						"Patients"
					],
					"operation": [
						"POST Patients Archive"
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
						"Patients"
					],
					"operation": [
						"POST Patients Archive"
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
						"Patients"
					],
					"operation": [
						"POST Patients Archive"
					]
				}
			}
		},
		{
			"displayName": "GET /patients/{id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Attachments"
					]
				}
			}
		},
		{
			"displayName": "Full",
			"name": "full",
			"description": "If present, retrieve the attachments list and their numerical ids",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "full",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Attachments"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /patients/{id}/attachments/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"DELETE Patients Attachments"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "Revision of the attachment, to check if its content has not changed and can be deleted. This header is mandatory if `CheckRevisions` option is `true`.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"DELETE Patients Attachments"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"DELETE Patients Attachments"
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
						"Patients"
					],
					"operation": [
						"DELETE Patients Attachments"
					]
				}
			}
		},
		{
			"displayName": "PUT /patients/{id}/attachments/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"PUT Patients Attachments"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "Revision of the attachment, if this is not the first time this attachment is set.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"PUT Patients Attachments"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"PUT Patients Attachments"
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
						"Patients"
					],
					"operation": [
						"PUT Patients Attachments"
					]
				}
			}
		},
		{
			"displayName": "PUT /patients/{id}/attachments/{name}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"PUT Patients Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /patients/{id}/attachments/{name}/compress",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"POST Patients Attachments Compress"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"POST Patients Attachments Compress"
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
						"Patients"
					],
					"operation": [
						"POST Patients Attachments Compress"
					]
				}
			}
		},
		{
			"displayName": "GET /patients/{id}/attachments/{name}/compressed-data",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Compressed Data"
					]
				}
			}
		},
		{
			"displayName": "If None Match",
			"name": "If-None-Match",
			"description": "Optional revision of the metadata, to check if its content has changed",
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
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Compressed Data"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Compressed Data"
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
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Compressed Data"
					]
				}
			}
		},
		{
			"displayName": "GET /patients/{id}/attachments/{name}/compressed-md5",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Compressed Md 5"
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
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Compressed Md 5"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Compressed Md 5"
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
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Compressed Md 5"
					]
				}
			}
		},
		{
			"displayName": "GET /patients/{id}/attachments/{name}/compressed-size",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Compressed Size"
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
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Compressed Size"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Compressed Size"
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
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Compressed Size"
					]
				}
			}
		},
		{
			"displayName": "GET /patients/{id}/attachments/{name}/data",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Data"
					]
				}
			}
		},
		{
			"displayName": "If None Match",
			"name": "If-None-Match",
			"description": "Optional revision of the metadata, to check if its content has changed",
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
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Data"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Data"
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
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Data"
					]
				}
			}
		},
		{
			"displayName": "GET /patients/{id}/attachments/{name}/info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Info"
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
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Info"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Info"
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
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Info"
					]
				}
			}
		},
		{
			"displayName": "GET /patients/{id}/attachments/{name}/is-compressed",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Is Compressed"
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
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Is Compressed"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Is Compressed"
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
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Is Compressed"
					]
				}
			}
		},
		{
			"displayName": "GET /patients/{id}/attachments/{name}/md5",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Md 5"
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
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Md 5"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Md 5"
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
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Md 5"
					]
				}
			}
		},
		{
			"displayName": "GET /patients/{id}/attachments/{name}/size",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Size"
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
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Size"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Size"
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
						"Patients"
					],
					"operation": [
						"GET Patients Attachments Size"
					]
				}
			}
		},
		{
			"displayName": "POST /patients/{id}/attachments/{name}/uncompress",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"POST Patients Attachments Uncompress"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"POST Patients Attachments Uncompress"
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
						"Patients"
					],
					"operation": [
						"POST Patients Attachments Uncompress"
					]
				}
			}
		},
		{
			"displayName": "POST /patients/{id}/attachments/{name}/verify-md5",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"POST Patients Attachments Verify Md 5"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"POST Patients Attachments Verify Md 5"
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
						"Patients"
					],
					"operation": [
						"POST Patients Attachments Verify Md 5"
					]
				}
			}
		},
		{
			"displayName": "GET /patients/{id}/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Instances"
					]
				}
			}
		},
		{
			"displayName": "Full",
			"name": "full",
			"description": "If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "full",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Instances"
					]
				}
			}
		},
		{
			"displayName": "Requested Tags",
			"name": "requestedTags",
			"description": "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "requestedTags",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Instances"
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
						"Patients"
					],
					"operation": [
						"GET Patients Instances"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /patients/{id}/instances-tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Instances Tags"
					]
				}
			}
		},
		{
			"displayName": "Ignore Length",
			"name": "ignore-length",
			"description": "Also include the DICOM tags that are provided in this list, even if their associated value is long",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "ignore-length",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Instances Tags"
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
						"Patients"
					],
					"operation": [
						"GET Patients Instances Tags"
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
						"Patients"
					],
					"operation": [
						"GET Patients Instances Tags"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Instances Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /patients/{id}/media",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Media"
					]
				}
			}
		},
		{
			"displayName": "Extended",
			"name": "extended",
			"description": "If present, will include additional tags such as `SeriesDescription`, leading to a so-called *extended DICOMDIR*",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "extended",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Media"
					]
				}
			}
		},
		{
			"displayName": "Filename",
			"name": "filename",
			"description": "Filename to set in the \"Content-Disposition\" HTTP header (including file extension)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filename",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Media"
					]
				}
			}
		},
		{
			"displayName": "Transcode",
			"name": "transcode",
			"description": "If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "transcode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Media"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Media"
					]
				}
			}
		},
		{
			"displayName": "POST /patients/{id}/media",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"POST Patients Media"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"POST Patients Media"
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
						"Patients"
					],
					"operation": [
						"POST Patients Media"
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
						"Patients"
					],
					"operation": [
						"POST Patients Media"
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
						"Patients"
					],
					"operation": [
						"POST Patients Media"
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
						"Patients"
					],
					"operation": [
						"POST Patients Media"
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
						"Patients"
					],
					"operation": [
						"POST Patients Media"
					]
				}
			}
		},
		{
			"displayName": "GET /patients/{id}/metadata",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Metadata"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "expand",
			"description": "If present, also retrieve the value of the individual metadata",
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
						"Patients"
					],
					"operation": [
						"GET Patients Metadata"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Metadata"
					]
				}
			}
		},
		{
			"displayName": "DELETE /patients/{id}/metadata/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"DELETE Patients Metadata"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "Revision of the metadata, to check if its content has not changed and can be deleted. This header is mandatory if `CheckRevisions` option is `true`.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"DELETE Patients Metadata"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"DELETE Patients Metadata"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "The name of the metadata, or its index (cf. `UserMetadata` configuration option)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"DELETE Patients Metadata"
					]
				}
			}
		},
		{
			"displayName": "PUT /patients/{id}/metadata/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"PUT Patients Metadata"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "Revision of the metadata, if this is not the first time this metadata is set.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"PUT Patients Metadata"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"PUT Patients Metadata"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "The name of the metadata, or its index (cf. `UserMetadata` configuration option)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"PUT Patients Metadata"
					]
				}
			}
		},
		{
			"displayName": "PUT /patients/{id}/metadata/{name}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"PUT Patients Metadata"
					]
				}
			}
		},
		{
			"displayName": "POST /patients/{id}/modify",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"POST Patients Modify"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"POST Patients Modify"
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
						"Patients"
					],
					"operation": [
						"POST Patients Modify"
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
						"Patients"
					],
					"operation": [
						"POST Patients Modify"
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
						"Patients"
					],
					"operation": [
						"POST Patients Modify"
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
						"Patients"
					],
					"operation": [
						"POST Patients Modify"
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
						"Patients"
					],
					"operation": [
						"POST Patients Modify"
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
						"Patients"
					],
					"operation": [
						"POST Patients Modify"
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
						"Patients"
					],
					"operation": [
						"POST Patients Modify"
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
						"Patients"
					],
					"operation": [
						"POST Patients Modify"
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
						"Patients"
					],
					"operation": [
						"POST Patients Modify"
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
						"Patients"
					],
					"operation": [
						"POST Patients Modify"
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
						"Patients"
					],
					"operation": [
						"POST Patients Modify"
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
						"Patients"
					],
					"operation": [
						"POST Patients Modify"
					]
				}
			}
		},
		{
			"displayName": "GET /patients/{id}/module",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Module"
					]
				}
			}
		},
		{
			"displayName": "Ignore Length",
			"name": "ignore-length",
			"description": "Also include the DICOM tags that are provided in this list, even if their associated value is long",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "ignore-length",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Module"
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
						"Patients"
					],
					"operation": [
						"GET Patients Module"
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
						"Patients"
					],
					"operation": [
						"GET Patients Module"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Module"
					]
				}
			}
		},
		{
			"displayName": "GET /patients/{id}/protected",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Protected"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Protected"
					]
				}
			}
		},
		{
			"displayName": "PUT /patients/{id}/protected",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"PUT Patients Protected"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"PUT Patients Protected"
					]
				}
			}
		},
		{
			"displayName": "POST /patients/{id}/reconstruct",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"POST Patients Reconstruct"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"POST Patients Reconstruct"
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
						"Patients"
					],
					"operation": [
						"POST Patients Reconstruct"
					]
				}
			}
		},
		{
			"displayName": "GET /patients/{id}/series",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Series"
					]
				}
			}
		},
		{
			"displayName": "Full",
			"name": "full",
			"description": "If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "full",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Series"
					]
				}
			}
		},
		{
			"displayName": "Requested Tags",
			"name": "requestedTags",
			"description": "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "requestedTags",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Series"
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
						"Patients"
					],
					"operation": [
						"GET Patients Series"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Series"
					]
				}
			}
		},
		{
			"displayName": "GET /patients/{id}/shared-tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Shared Tags"
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
						"Patients"
					],
					"operation": [
						"GET Patients Shared Tags"
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
						"Patients"
					],
					"operation": [
						"GET Patients Shared Tags"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Shared Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /patients/{id}/statistics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Statistics"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Statistics"
					]
				}
			}
		},
		{
			"displayName": "GET /patients/{id}/studies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Studies"
					]
				}
			}
		},
		{
			"displayName": "Full",
			"name": "full",
			"description": "If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "full",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Studies"
					]
				}
			}
		},
		{
			"displayName": "Requested Tags",
			"name": "requestedTags",
			"description": "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "requestedTags",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Studies"
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
						"Patients"
					],
					"operation": [
						"GET Patients Studies"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the patient of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Patients"
					],
					"operation": [
						"GET Patients Studies"
					]
				}
			}
		},
];
