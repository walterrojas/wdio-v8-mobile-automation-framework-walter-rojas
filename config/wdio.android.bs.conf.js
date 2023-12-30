import {config as baseConfig} from './wdio.base.conf.js'

export const config = {
    ...baseConfig,
    ...{
        user: process.env.BROWSERSTACK_USERNAME,
        key: process.env.BROWSERSTACK_ACCESS_KEY,
        services: ['browserstack'],
        maxInstances: 3,
        maxInstancesPerCapability: 1,
        capabilities: [
            {
                project: 'Walter Mobile Demo App Testing',
                build: process.env.BUILD,
                platformName: 'Android',
                platformVersion: '12.0',
                deviceName: 'Pixel 4',
                automationName: 'UiAutomator2',
                app: process.env.BROWSERSTACK_APP,
                'browserstack.debug': 'true',
                'browserstack.networkLogs': 'true',
            },
            {
                project: 'Walter Mobile Demo App Testing',
                build: process.env.BUILD,
                platformName: 'Android',
                platformVersion: '11.0',
                deviceName: 'Pixel 3',
                automationName: 'UiAutomator2',
                app: process.env.BROWSERSTACK_APP,
                'browserstack.debug': 'true',
                'browserstack.networkLogs': 'true',
            },
            {
                project: 'Walter Mobile Demo App Testing',
                build: process.env.BUILD,
                platformName: 'Android',
                platformVersion: '10.0',
                deviceName: 'Pixel 2',
                automationName: 'UiAutomator2',
                app: process.env.BROWSERSTACK_APP,
                'browserstack.debug': 'true',
                'browserstack.networkLogs': 'true',
            }
        ]
    }
}
