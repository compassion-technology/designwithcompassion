"use strict";(self.webpackChunk_compassion_gds_core=self.webpackChunk_compassion_gds_core||[]).push([[120],{"./src/components/Table/Table.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,DisabledFirstCell:()=>DisabledFirstCell,DisabledFirstRow:()=>DisabledFirstRow,HorizontalAndSticky:()=>HorizontalAndSticky,HorizontalScroll:()=>HorizontalScroll,StickyHeader:()=>StickyHeader,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Table",argTypes:{stickyHeader:{control:"boolean"},disabled:{control:"boolean"},state:{control:{type:"select"},options:["default","disabled","active"]}},decorators:[Story=>`<div style="width: 450px;">${Story()}</div>`]},Table=({stickyHeader=!1,state="default",tableWidth=null,containerHeight=null,disabledRow=!1,disabledCell=!1})=>`\n    <div class="table-container" style="${containerHeight?`max-height: ${containerHeight}`:""}">\n      <table class="table ${stickyHeader?"sticky-header":""} ${state}" style="${tableWidth?`width: ${tableWidth}`:""}">\n      <thead class="table-head">\n        <tr class="table-row">\n          <th class="table-cell ${state}">Heading</th>\n          <th class="table-cell ${state}"><a href="https://google.com">Link</a></th>\n          <th class="table-cell ${state}">Heading</th>\n        </tr>\n      </thead>\n      <tbody class="table-body">\n        <tr class="table-row ${disabledRow?"disabled":""}">\n          <td class="table-cell ${disabledCell?"disabled":""}">Cell 1</td>\n          <td class="table-cell">Cell 2</td>\n          <td class="table-cell">Cell 3</td>\n        </tr>\n        <tr class="table-row">\n          <td class="table-cell"><a href="https://google.com">Link 1</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 2</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 3</a></td>\n        </tr>\n        <tr class="table-row">\n          <td class="table-cell">Cell 1</td>\n          <td class="table-cell">Cell 2</td>\n          <td class="table-cell">Cell 3</td>\n        </tr>\n        <tr class="table-row">\n          <td class="table-cell"><a href="https://google.com">Link 1</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 2</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 3</a></td>\n        </tr>\n      </tbody>\n    </table>\n    </div>\n`,Default=Table.bind({});Default.args={state:"default",stickyHeader:!1};const Disabled=Table.bind({});Disabled.args={state:"disabled",stickyHeader:!1};const DisabledFirstRow=Table.bind({});DisabledFirstRow.args={state:"default",stickyHeader:!1,disabledRow:!0};const DisabledFirstCell=Table.bind({});DisabledFirstCell.args={state:"default",stickyHeader:!1,disabledCell:!0};const HorizontalScroll=Table.bind({});HorizontalScroll.args={state:"default",tableWidth:"500px"};const StickyHeader=Table.bind({});StickyHeader.args={state:"default",stickyHeader:!0,containerHeight:"150px"};const HorizontalAndSticky=Table.bind({});HorizontalAndSticky.args={state:"default",stickyHeader:!0,containerHeight:"150px",tableWidth:"500px"};const __namedExportsOrder=["Default","Disabled","DisabledFirstRow","DisabledFirstCell","HorizontalScroll","StickyHeader","HorizontalAndSticky"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'({\n  stickyHeader = false,\n  state = \'default\',\n  tableWidth = null,\n  containerHeight = null,\n  disabledRow = false,\n  disabledCell = false\n}) => {\n  const sticky = stickyHeader ? \'sticky-header\' : \'\';\n  return `\n    <div class="table-container" style="${containerHeight ? `max-height: ${containerHeight}` : \'\'}">\n      <table class="table ${sticky} ${state}" style="${tableWidth ? `width: ${tableWidth}` : \'\'}">\n      <thead class="table-head">\n        <tr class="table-row">\n          <th class="table-cell ${state}">Heading</th>\n          <th class="table-cell ${state}"><a href="https://google.com">Link</a></th>\n          <th class="table-cell ${state}">Heading</th>\n        </tr>\n      </thead>\n      <tbody class="table-body">\n        <tr class="table-row ${disabledRow ? \'disabled\' : \'\'}">\n          <td class="table-cell ${disabledCell ? \'disabled\' : \'\'}">Cell 1</td>\n          <td class="table-cell">Cell 2</td>\n          <td class="table-cell">Cell 3</td>\n        </tr>\n        <tr class="table-row">\n          <td class="table-cell"><a href="https://google.com">Link 1</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 2</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 3</a></td>\n        </tr>\n        <tr class="table-row">\n          <td class="table-cell">Cell 1</td>\n          <td class="table-cell">Cell 2</td>\n          <td class="table-cell">Cell 3</td>\n        </tr>\n        <tr class="table-row">\n          <td class="table-cell"><a href="https://google.com">Link 1</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 2</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 3</a></td>\n        </tr>\n      </tbody>\n    </table>\n    </div>\n`;\n}',...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'({\n  stickyHeader = false,\n  state = \'default\',\n  tableWidth = null,\n  containerHeight = null,\n  disabledRow = false,\n  disabledCell = false\n}) => {\n  const sticky = stickyHeader ? \'sticky-header\' : \'\';\n  return `\n    <div class="table-container" style="${containerHeight ? `max-height: ${containerHeight}` : \'\'}">\n      <table class="table ${sticky} ${state}" style="${tableWidth ? `width: ${tableWidth}` : \'\'}">\n      <thead class="table-head">\n        <tr class="table-row">\n          <th class="table-cell ${state}">Heading</th>\n          <th class="table-cell ${state}"><a href="https://google.com">Link</a></th>\n          <th class="table-cell ${state}">Heading</th>\n        </tr>\n      </thead>\n      <tbody class="table-body">\n        <tr class="table-row ${disabledRow ? \'disabled\' : \'\'}">\n          <td class="table-cell ${disabledCell ? \'disabled\' : \'\'}">Cell 1</td>\n          <td class="table-cell">Cell 2</td>\n          <td class="table-cell">Cell 3</td>\n        </tr>\n        <tr class="table-row">\n          <td class="table-cell"><a href="https://google.com">Link 1</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 2</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 3</a></td>\n        </tr>\n        <tr class="table-row">\n          <td class="table-cell">Cell 1</td>\n          <td class="table-cell">Cell 2</td>\n          <td class="table-cell">Cell 3</td>\n        </tr>\n        <tr class="table-row">\n          <td class="table-cell"><a href="https://google.com">Link 1</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 2</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 3</a></td>\n        </tr>\n      </tbody>\n    </table>\n    </div>\n`;\n}',...Disabled.parameters?.docs?.source}}},DisabledFirstRow.parameters={...DisabledFirstRow.parameters,docs:{...DisabledFirstRow.parameters?.docs,source:{originalSource:'({\n  stickyHeader = false,\n  state = \'default\',\n  tableWidth = null,\n  containerHeight = null,\n  disabledRow = false,\n  disabledCell = false\n}) => {\n  const sticky = stickyHeader ? \'sticky-header\' : \'\';\n  return `\n    <div class="table-container" style="${containerHeight ? `max-height: ${containerHeight}` : \'\'}">\n      <table class="table ${sticky} ${state}" style="${tableWidth ? `width: ${tableWidth}` : \'\'}">\n      <thead class="table-head">\n        <tr class="table-row">\n          <th class="table-cell ${state}">Heading</th>\n          <th class="table-cell ${state}"><a href="https://google.com">Link</a></th>\n          <th class="table-cell ${state}">Heading</th>\n        </tr>\n      </thead>\n      <tbody class="table-body">\n        <tr class="table-row ${disabledRow ? \'disabled\' : \'\'}">\n          <td class="table-cell ${disabledCell ? \'disabled\' : \'\'}">Cell 1</td>\n          <td class="table-cell">Cell 2</td>\n          <td class="table-cell">Cell 3</td>\n        </tr>\n        <tr class="table-row">\n          <td class="table-cell"><a href="https://google.com">Link 1</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 2</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 3</a></td>\n        </tr>\n        <tr class="table-row">\n          <td class="table-cell">Cell 1</td>\n          <td class="table-cell">Cell 2</td>\n          <td class="table-cell">Cell 3</td>\n        </tr>\n        <tr class="table-row">\n          <td class="table-cell"><a href="https://google.com">Link 1</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 2</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 3</a></td>\n        </tr>\n      </tbody>\n    </table>\n    </div>\n`;\n}',...DisabledFirstRow.parameters?.docs?.source}}},DisabledFirstCell.parameters={...DisabledFirstCell.parameters,docs:{...DisabledFirstCell.parameters?.docs,source:{originalSource:'({\n  stickyHeader = false,\n  state = \'default\',\n  tableWidth = null,\n  containerHeight = null,\n  disabledRow = false,\n  disabledCell = false\n}) => {\n  const sticky = stickyHeader ? \'sticky-header\' : \'\';\n  return `\n    <div class="table-container" style="${containerHeight ? `max-height: ${containerHeight}` : \'\'}">\n      <table class="table ${sticky} ${state}" style="${tableWidth ? `width: ${tableWidth}` : \'\'}">\n      <thead class="table-head">\n        <tr class="table-row">\n          <th class="table-cell ${state}">Heading</th>\n          <th class="table-cell ${state}"><a href="https://google.com">Link</a></th>\n          <th class="table-cell ${state}">Heading</th>\n        </tr>\n      </thead>\n      <tbody class="table-body">\n        <tr class="table-row ${disabledRow ? \'disabled\' : \'\'}">\n          <td class="table-cell ${disabledCell ? \'disabled\' : \'\'}">Cell 1</td>\n          <td class="table-cell">Cell 2</td>\n          <td class="table-cell">Cell 3</td>\n        </tr>\n        <tr class="table-row">\n          <td class="table-cell"><a href="https://google.com">Link 1</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 2</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 3</a></td>\n        </tr>\n        <tr class="table-row">\n          <td class="table-cell">Cell 1</td>\n          <td class="table-cell">Cell 2</td>\n          <td class="table-cell">Cell 3</td>\n        </tr>\n        <tr class="table-row">\n          <td class="table-cell"><a href="https://google.com">Link 1</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 2</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 3</a></td>\n        </tr>\n      </tbody>\n    </table>\n    </div>\n`;\n}',...DisabledFirstCell.parameters?.docs?.source}}},HorizontalScroll.parameters={...HorizontalScroll.parameters,docs:{...HorizontalScroll.parameters?.docs,source:{originalSource:'({\n  stickyHeader = false,\n  state = \'default\',\n  tableWidth = null,\n  containerHeight = null,\n  disabledRow = false,\n  disabledCell = false\n}) => {\n  const sticky = stickyHeader ? \'sticky-header\' : \'\';\n  return `\n    <div class="table-container" style="${containerHeight ? `max-height: ${containerHeight}` : \'\'}">\n      <table class="table ${sticky} ${state}" style="${tableWidth ? `width: ${tableWidth}` : \'\'}">\n      <thead class="table-head">\n        <tr class="table-row">\n          <th class="table-cell ${state}">Heading</th>\n          <th class="table-cell ${state}"><a href="https://google.com">Link</a></th>\n          <th class="table-cell ${state}">Heading</th>\n        </tr>\n      </thead>\n      <tbody class="table-body">\n        <tr class="table-row ${disabledRow ? \'disabled\' : \'\'}">\n          <td class="table-cell ${disabledCell ? \'disabled\' : \'\'}">Cell 1</td>\n          <td class="table-cell">Cell 2</td>\n          <td class="table-cell">Cell 3</td>\n        </tr>\n        <tr class="table-row">\n          <td class="table-cell"><a href="https://google.com">Link 1</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 2</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 3</a></td>\n        </tr>\n        <tr class="table-row">\n          <td class="table-cell">Cell 1</td>\n          <td class="table-cell">Cell 2</td>\n          <td class="table-cell">Cell 3</td>\n        </tr>\n        <tr class="table-row">\n          <td class="table-cell"><a href="https://google.com">Link 1</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 2</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 3</a></td>\n        </tr>\n      </tbody>\n    </table>\n    </div>\n`;\n}',...HorizontalScroll.parameters?.docs?.source}}},StickyHeader.parameters={...StickyHeader.parameters,docs:{...StickyHeader.parameters?.docs,source:{originalSource:'({\n  stickyHeader = false,\n  state = \'default\',\n  tableWidth = null,\n  containerHeight = null,\n  disabledRow = false,\n  disabledCell = false\n}) => {\n  const sticky = stickyHeader ? \'sticky-header\' : \'\';\n  return `\n    <div class="table-container" style="${containerHeight ? `max-height: ${containerHeight}` : \'\'}">\n      <table class="table ${sticky} ${state}" style="${tableWidth ? `width: ${tableWidth}` : \'\'}">\n      <thead class="table-head">\n        <tr class="table-row">\n          <th class="table-cell ${state}">Heading</th>\n          <th class="table-cell ${state}"><a href="https://google.com">Link</a></th>\n          <th class="table-cell ${state}">Heading</th>\n        </tr>\n      </thead>\n      <tbody class="table-body">\n        <tr class="table-row ${disabledRow ? \'disabled\' : \'\'}">\n          <td class="table-cell ${disabledCell ? \'disabled\' : \'\'}">Cell 1</td>\n          <td class="table-cell">Cell 2</td>\n          <td class="table-cell">Cell 3</td>\n        </tr>\n        <tr class="table-row">\n          <td class="table-cell"><a href="https://google.com">Link 1</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 2</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 3</a></td>\n        </tr>\n        <tr class="table-row">\n          <td class="table-cell">Cell 1</td>\n          <td class="table-cell">Cell 2</td>\n          <td class="table-cell">Cell 3</td>\n        </tr>\n        <tr class="table-row">\n          <td class="table-cell"><a href="https://google.com">Link 1</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 2</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 3</a></td>\n        </tr>\n      </tbody>\n    </table>\n    </div>\n`;\n}',...StickyHeader.parameters?.docs?.source}}},HorizontalAndSticky.parameters={...HorizontalAndSticky.parameters,docs:{...HorizontalAndSticky.parameters?.docs,source:{originalSource:'({\n  stickyHeader = false,\n  state = \'default\',\n  tableWidth = null,\n  containerHeight = null,\n  disabledRow = false,\n  disabledCell = false\n}) => {\n  const sticky = stickyHeader ? \'sticky-header\' : \'\';\n  return `\n    <div class="table-container" style="${containerHeight ? `max-height: ${containerHeight}` : \'\'}">\n      <table class="table ${sticky} ${state}" style="${tableWidth ? `width: ${tableWidth}` : \'\'}">\n      <thead class="table-head">\n        <tr class="table-row">\n          <th class="table-cell ${state}">Heading</th>\n          <th class="table-cell ${state}"><a href="https://google.com">Link</a></th>\n          <th class="table-cell ${state}">Heading</th>\n        </tr>\n      </thead>\n      <tbody class="table-body">\n        <tr class="table-row ${disabledRow ? \'disabled\' : \'\'}">\n          <td class="table-cell ${disabledCell ? \'disabled\' : \'\'}">Cell 1</td>\n          <td class="table-cell">Cell 2</td>\n          <td class="table-cell">Cell 3</td>\n        </tr>\n        <tr class="table-row">\n          <td class="table-cell"><a href="https://google.com">Link 1</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 2</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 3</a></td>\n        </tr>\n        <tr class="table-row">\n          <td class="table-cell">Cell 1</td>\n          <td class="table-cell">Cell 2</td>\n          <td class="table-cell">Cell 3</td>\n        </tr>\n        <tr class="table-row">\n          <td class="table-cell"><a href="https://google.com">Link 1</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 2</a></td>\n          <td class="table-cell"><a href="https://google.com">Link 3</a></td>\n        </tr>\n      </tbody>\n    </table>\n    </div>\n`;\n}',...HorizontalAndSticky.parameters?.docs?.source}}}}}]);