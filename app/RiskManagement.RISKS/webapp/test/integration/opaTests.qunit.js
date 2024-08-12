sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'RiskManagement/RISKS/test/integration/FirstJourney',
		'RiskManagement/RISKS/test/integration/pages/RisksList',
		'RiskManagement/RISKS/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('RiskManagement/RISKS') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);