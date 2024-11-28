/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2023 Comcast Cable Communications Management, LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { ExampleSettings } from '../common/ExampleSettings.js';

export async function automation(settings: ExampleSettings) {
  await test(settings);
  await settings.snapshot();
}

/**
 * Load a texture from a base64 encoded string.
 * @param settings
 */
export default async function test(settings: ExampleSettings) {
  const { renderer, testRoot } = settings;
  const node = renderer.createNode({
    x: 400,
    y: 200,
    width: 228,
    height: 228,
    parent: testRoot,
    src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAANHUlEQVR4nOzXjdcWdH3HcW69UcdUsnK4JWtNfDh3SDkyBfF0TM9Ec2SajJwPcE5LDQmtOSNTO5ajURZuuq2EwdZtDxsHXA0EVmFio81QGg3xgIZLGBJYaE+guf0Vn3M65/N6/QGf332u67rP+3wHL7/wqhFJd+76RnT/stPnRPePf35CdH/XTeui+0sueCa6v/srH4zu33LFwuj+2humRfcP2/bT6P6o18+L7o/76NTo/ozr3hDdv/WXn4zur7n/Q9H9J487NLp/SHQdgF9bAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACg1OCW0S9FHxg3tCy6v27WlOj+D097Lrp/246To/vjLz8Y3b/8qs3R/aPPfF90f9EJK6L7+07N/n7WXropuv/ak+ZE96eNfjG6//Kl347uH33vs9H9Y/dkv18XAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQauA3fjAh+sCOd58c3R9/5vui+88MPxTdP+Glg9H9t45aHt1ffdym6P55n/pWdP/p88+J7k/726Ho/uvueiy6f8Zp46P7P9y6Mbo/5bbjovvbNn4kuj970cvRfRcAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBqYMTMN0cfmPp4tjEzvjsrur9o6e7o/sH/fkN0/6wl66P7v/XdTdH9kY/eGd1/6pj90f2HZvxndP8dK2+J7p/xtiej+/M+9IXo/qS5S6P7570/+/nc9M6J0X0XAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBK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',
  });
}