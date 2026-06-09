import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { trackingChangesDescription } from './resources/tracking-changes';
import { instancesDescription } from './resources/instances';
import { otherDescription } from './resources/other';
import { jobsDescription } from './resources/jobs';
import { networkingDescription } from './resources/networking';
import { patientsDescription } from './resources/patients';
import { systemDescription } from './resources/system';
import { seriesDescription } from './resources/series';
import { studiesDescription } from './resources/studies';
import { logsDescription } from './resources/logs';

export class OrthancServer implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Orthanc Server',
		name: 'N8nDevOrthancServer',
		icon: { light: 'file:./orthanc-server.svg', dark: 'file:./orthanc-server.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'The full documentation of the REST API of Orthanc.This reference is automatically generated from the source code of Orthanc. A [shorter..',
		defaults: { name: 'Orthanc Server' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevOrthancServerApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Tracking Changes",
					"value": "Tracking Changes",
					"description": ""
				},
				{
					"name": "Instances",
					"value": "Instances",
					"description": ""
				},
				{
					"name": "Other",
					"value": "Other",
					"description": ""
				},
				{
					"name": "Jobs",
					"value": "Jobs",
					"description": ""
				},
				{
					"name": "Networking",
					"value": "Networking",
					"description": ""
				},
				{
					"name": "Patients",
					"value": "Patients",
					"description": ""
				},
				{
					"name": "System",
					"value": "System",
					"description": ""
				},
				{
					"name": "Series",
					"value": "Series",
					"description": ""
				},
				{
					"name": "Studies",
					"value": "Studies",
					"description": ""
				},
				{
					"name": "Logs",
					"value": "Logs",
					"description": ""
				}
			],
			"default": ""
		},
		...trackingChangesDescription,
		...instancesDescription,
		...otherDescription,
		...jobsDescription,
		...networkingDescription,
		...patientsDescription,
		...systemDescription,
		...seriesDescription,
		...studiesDescription,
		...logsDescription
		],
	};
}
