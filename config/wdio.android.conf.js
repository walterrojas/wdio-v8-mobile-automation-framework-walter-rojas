import path from 'path'
import {config as baseConfig} from './wdio.base.conf.js'

export const config = {
    ...baseConfig,
    ...{
        services: [
            ['appium', {
                args: {
                    address: 'localhost',
                    port: 4723
                },
                logPath: './'
            }]
        ],
        capabilities: [
            {
                platformName: "Android",
                "appium:deviceName": "Pixel_4_12_0",
                "appium:avd": "Pixel_4_12_0",
                "appium:platformVersion": "12.0",
                "appium:automationName": "UiAutomator2",
                "appium:app": path.join(process.cwd(), "./app/android/me.wolszon.fastshopping_23.apk"),
                "appium:noReset": true,
                "appium:appPackage": "me.wolszon.fastshopping",
                "appium:appActivity": "me.wolszon.fastshopping.MainActivity"
            }
        ]
    }
}
