import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
font-size: 16px;
width: 100%;
margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
list-style-type: none;
padding: 4px;
display: flex;
margin: 0;
`;

WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
border-radius: 16px 16px 0 0;
border: 1px solid #ccc;
padding: 16px;
user-select: none;
cursor: pointer;
background-color: #fff;

&:focus {
    outline: none;
}

&.is-selected {
    border-radius: 16px 16px 0 0;
    border-bottom: 1px solid #fff;
    z-index: 9999;
}
`;

WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
display: none;
min-height: 40vh;
padding: 8px;
margin-top: -5px;
background-color: #fff;
border: 1px solid #ccc;

&.is-selected {
    display: block;
}
`;

WrapperTabPanel.tabsRole = "TabPanel";