sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'acc/companies/companieslist/test/integration/FirstJourney',
		'acc/companies/companieslist/test/integration/pages/CompaniesList',
		'acc/companies/companieslist/test/integration/pages/CompaniesObjectPage'
    ],
    function(JourneyRunner, opaJourney, CompaniesList, CompaniesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('acc/companies/companieslist') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCompaniesList: CompaniesList,
					onTheCompaniesObjectPage: CompaniesObjectPage
                }
            },
            opaJourney.run
        );
    }
);