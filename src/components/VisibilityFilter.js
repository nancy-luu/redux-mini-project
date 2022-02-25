import React from 'react'
import { Container, Tab, TabList, Tabs } from '@chakra-ui/react'
// import { VISIBILITY_FILTER } from '../constants'


const VisibilityFilter = () => {
  return (
    <Container centerContent>
        <Tabs>
            <TabList>
                <Tab>All</Tab>
                <Tab>Completed</Tab>
                <Tab>Incompleted</Tab>
                {/* {Object.keys(VISIBILITY_FILTER).map(filterkey => {
                    const currentFilter = VISIBILITY_FILTER[filterkey];
                    return (
                        <Tab
                            key={`visibility-filter-${currentFilter}`}

                        >
                            {currentFilter}
                        </Tab>
                    )
                })} */}
            </TabList>
        </Tabs>
    </Container>
  )
}

export default VisibilityFilter
