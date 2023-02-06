sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'acc.companies.companieslist',
            componentId: 'CompaniesObjectPage',
            entitySet: 'Companies'
        },
        CustomPageDefinitions
    );
});