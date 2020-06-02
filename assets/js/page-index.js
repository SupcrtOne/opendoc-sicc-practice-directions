(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [
        
        {
                name: "Part_01.md",
                title: "Part I - SCOPE AND APPLICATION",
                url: "/opendoc-sicc-practice-directions/Part_01.html",
                escapedPath: "Part_01.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Singapore International Commercial Court Practice Directions",null,["Part_01.md","Part_02.md","Part_03.md","Part_04.md","Part_05.md","Part_06.md","Part_07.md","Part_08.md","Part_09.md","Part_10.md","Part_11.md","Part_12.md","Part_13.md","Part_14.md","Part_15.md","Part_16.md","Part_17.md","Part_18.md","Part_19.md","Part_20.md","Part_21.md","Part_22.md","Part_23.md","appendix.md"]]
            },
            
        {
                name: "Part_02.md",
                title: "Part II - GENERAL MATTERS",
                url: "/opendoc-sicc-practice-directions/Part_02.html",
                escapedPath: "Part_02.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Singapore International Commercial Court Practice Directions",null,["Part_01.md","Part_02.md","Part_03.md","Part_04.md","Part_05.md","Part_06.md","Part_07.md","Part_08.md","Part_09.md","Part_10.md","Part_11.md","Part_12.md","Part_13.md","Part_14.md","Part_15.md","Part_16.md","Part_17.md","Part_18.md","Part_19.md","Part_20.md","Part_21.md","Part_22.md","Part_23.md","appendix.md"]]
            },
            
        {
                name: "Part_03.md",
                title: "Part III - CONSTITUTION OF THE COURT AND COURT OF APPEAL",
                url: "/opendoc-sicc-practice-directions/Part_03.html",
                escapedPath: "Part_03.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Singapore International Commercial Court Practice Directions",null,["Part_01.md","Part_02.md","Part_03.md","Part_04.md","Part_05.md","Part_06.md","Part_07.md","Part_08.md","Part_09.md","Part_10.md","Part_11.md","Part_12.md","Part_13.md","Part_14.md","Part_15.md","Part_16.md","Part_17.md","Part_18.md","Part_19.md","Part_20.md","Part_21.md","Part_22.md","Part_23.md","appendix.md"]]
            },
            
        {
                name: "Part_04.md",
                title: "Part IV - REPRESENTATION",
                url: "/opendoc-sicc-practice-directions/Part_04.html",
                escapedPath: "Part_04.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Singapore International Commercial Court Practice Directions",null,["Part_01.md","Part_02.md","Part_03.md","Part_04.md","Part_05.md","Part_06.md","Part_07.md","Part_08.md","Part_09.md","Part_10.md","Part_11.md","Part_12.md","Part_13.md","Part_14.md","Part_15.md","Part_16.md","Part_17.md","Part_18.md","Part_19.md","Part_20.md","Part_21.md","Part_22.md","Part_23.md","appendix.md"]]
            },
            
        {
                name: "Part_05.md",
                title: "Part V - OFFSHORE CASES",
                url: "/opendoc-sicc-practice-directions/Part_05.html",
                escapedPath: "Part_05.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Singapore International Commercial Court Practice Directions",null,["Part_01.md","Part_02.md","Part_03.md","Part_04.md","Part_05.md","Part_06.md","Part_07.md","Part_08.md","Part_09.md","Part_10.md","Part_11.md","Part_12.md","Part_13.md","Part_14.md","Part_15.md","Part_16.md","Part_17.md","Part_18.md","Part_19.md","Part_20.md","Part_21.md","Part_22.md","Part_23.md","appendix.md"]]
            },
            
        {
                name: "Part_06.md",
                title: "Part VI - (deleted)",
                url: "/opendoc-sicc-practice-directions/Part_06.html",
                escapedPath: "Part_06.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Singapore International Commercial Court Practice Directions",null,["Part_01.md","Part_02.md","Part_03.md","Part_04.md","Part_05.md","Part_06.md","Part_07.md","Part_08.md","Part_09.md","Part_10.md","Part_11.md","Part_12.md","Part_13.md","Part_14.md","Part_15.md","Part_16.md","Part_17.md","Part_18.md","Part_19.md","Part_20.md","Part_21.md","Part_22.md","Part_23.md","appendix.md"]]
            },
            
        {
                name: "Part_07.md",
                title: "Part VII - FEES",
                url: "/opendoc-sicc-practice-directions/Part_07.html",
                escapedPath: "Part_07.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Singapore International Commercial Court Practice Directions",null,["Part_01.md","Part_02.md","Part_03.md","Part_04.md","Part_05.md","Part_06.md","Part_07.md","Part_08.md","Part_09.md","Part_10.md","Part_11.md","Part_12.md","Part_13.md","Part_14.md","Part_15.md","Part_16.md","Part_17.md","Part_18.md","Part_19.md","Part_20.md","Part_21.md","Part_22.md","Part_23.md","appendix.md"]]
            },
            
        {
                name: "Part_08.md",
                title: "Part VIII - ELECTRONIC FILING AND USE OF TECHNOLOGY FACILITIES",
                url: "/opendoc-sicc-practice-directions/Part_08.html",
                escapedPath: "Part_08.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Singapore International Commercial Court Practice Directions",null,["Part_01.md","Part_02.md","Part_03.md","Part_04.md","Part_05.md","Part_06.md","Part_07.md","Part_08.md","Part_09.md","Part_10.md","Part_11.md","Part_12.md","Part_13.md","Part_14.md","Part_15.md","Part_16.md","Part_17.md","Part_18.md","Part_19.md","Part_20.md","Part_21.md","Part_22.md","Part_23.md","appendix.md"]]
            },
            
        {
                name: "Part_09.md",
                title: "Part IX - COMMENCEMENT, TRANSFER AND CESSATION OF PROCEEDINGS IN THE COURT",
                url: "/opendoc-sicc-practice-directions/Part_09.html",
                escapedPath: "Part_09.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Singapore International Commercial Court Practice Directions",null,["Part_01.md","Part_02.md","Part_03.md","Part_04.md","Part_05.md","Part_06.md","Part_07.md","Part_08.md","Part_09.md","Part_10.md","Part_11.md","Part_12.md","Part_13.md","Part_14.md","Part_15.md","Part_16.md","Part_17.md","Part_18.md","Part_19.md","Part_20.md","Part_21.md","Part_22.md","Part_23.md","appendix.md"]]
            },
            
        {
                name: "Part_10.md",
                title: "Part X - ORIGINATING PROCESSES AND DOCUMENTS",
                url: "/opendoc-sicc-practice-directions/Part_10.html",
                escapedPath: "Part_10.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Singapore International Commercial Court Practice Directions",null,["Part_01.md","Part_02.md","Part_03.md","Part_04.md","Part_05.md","Part_06.md","Part_07.md","Part_08.md","Part_09.md","Part_10.md","Part_11.md","Part_12.md","Part_13.md","Part_14.md","Part_15.md","Part_16.md","Part_17.md","Part_18.md","Part_19.md","Part_20.md","Part_21.md","Part_22.md","Part_23.md","appendix.md"]]
            },
            
        {
                name: "Part_11.md",
                title: "Part XI - SERVICE",
                url: "/opendoc-sicc-practice-directions/Part_11.html",
                escapedPath: "Part_11.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Singapore International Commercial Court Practice Directions",null,["Part_01.md","Part_02.md","Part_03.md","Part_04.md","Part_05.md","Part_06.md","Part_07.md","Part_08.md","Part_09.md","Part_10.md","Part_11.md","Part_12.md","Part_13.md","Part_14.md","Part_15.md","Part_16.md","Part_17.md","Part_18.md","Part_19.md","Part_20.md","Part_21.md","Part_22.md","Part_23.md","appendix.md"]]
            },
            
        {
                name: "Part_12.md",
                title: "Part XII - CASE MANAGEMENT",
                url: "/opendoc-sicc-practice-directions/Part_12.html",
                escapedPath: "Part_12.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Singapore International Commercial Court Practice Directions",null,["Part_01.md","Part_02.md","Part_03.md","Part_04.md","Part_05.md","Part_06.md","Part_07.md","Part_08.md","Part_09.md","Part_10.md","Part_11.md","Part_12.md","Part_13.md","Part_14.md","Part_15.md","Part_16.md","Part_17.md","Part_18.md","Part_19.md","Part_20.md","Part_21.md","Part_22.md","Part_23.md","appendix.md"]]
            },
            
        {
                name: "Part_13.md",
                title: "Part XIII - EXPERT WITNESSES",
                url: "/opendoc-sicc-practice-directions/Part_13.html",
                escapedPath: "Part_13.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Singapore International Commercial Court Practice Directions",null,["Part_01.md","Part_02.md","Part_03.md","Part_04.md","Part_05.md","Part_06.md","Part_07.md","Part_08.md","Part_09.md","Part_10.md","Part_11.md","Part_12.md","Part_13.md","Part_14.md","Part_15.md","Part_16.md","Part_17.md","Part_18.md","Part_19.md","Part_20.md","Part_21.md","Part_22.md","Part_23.md","appendix.md"]]
            },
            
        {
                name: "Part_14.md",
                title: "Part XIV - REQUESTS FOR PRODUCTION OF DOCUMENTS",
                url: "/opendoc-sicc-practice-directions/Part_14.html",
                escapedPath: "Part_14.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Singapore International Commercial Court Practice Directions",null,["Part_01.md","Part_02.md","Part_03.md","Part_04.md","Part_05.md","Part_06.md","Part_07.md","Part_08.md","Part_09.md","Part_10.md","Part_11.md","Part_12.md","Part_13.md","Part_14.md","Part_15.md","Part_16.md","Part_17.md","Part_18.md","Part_19.md","Part_20.md","Part_21.md","Part_22.md","Part_23.md","appendix.md"]]
            },
            
        {
                name: "Part_15.md",
                title: "PART XV - CONFIDENTIALITY IN PROCEEDINGS",
                url: "/opendoc-sicc-practice-directions/Part_15.html",
                escapedPath: "Part_15.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Singapore International Commercial Court Practice Directions",null,["Part_01.md","Part_02.md","Part_03.md","Part_04.md","Part_05.md","Part_06.md","Part_07.md","Part_08.md","Part_09.md","Part_10.md","Part_11.md","Part_12.md","Part_13.md","Part_14.md","Part_15.md","Part_16.md","Part_17.md","Part_18.md","Part_19.md","Part_20.md","Part_21.md","Part_22.md","Part_23.md","appendix.md"]]
            },
            
        {
                name: "Part_16.md",
                title: "PART XVI - CONDUCT OF HEARINGS",
                url: "/opendoc-sicc-practice-directions/Part_16.html",
                escapedPath: "Part_16.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Singapore International Commercial Court Practice Directions",null,["Part_01.md","Part_02.md","Part_03.md","Part_04.md","Part_05.md","Part_06.md","Part_07.md","Part_08.md","Part_09.md","Part_10.md","Part_11.md","Part_12.md","Part_13.md","Part_14.md","Part_15.md","Part_16.md","Part_17.md","Part_18.md","Part_19.md","Part_20.md","Part_21.md","Part_22.md","Part_23.md","appendix.md"]]
            },
            
        {
                name: "Part_17.md",
                title: "PART XVII - INTERLOCUTORY APPLICATIONS (INCLUDING APPLICATIONS FOR INJUNCTIONS)",
                url: "/opendoc-sicc-practice-directions/Part_17.html",
                escapedPath: "Part_17.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Singapore International Commercial Court Practice Directions",null,["Part_01.md","Part_02.md","Part_03.md","Part_04.md","Part_05.md","Part_06.md","Part_07.md","Part_08.md","Part_09.md","Part_10.md","Part_11.md","Part_12.md","Part_13.md","Part_14.md","Part_15.md","Part_16.md","Part_17.md","Part_18.md","Part_19.md","Part_20.md","Part_21.md","Part_22.md","Part_23.md","appendix.md"]]
            },
            
        {
                name: "Part_18.md",
                title: "PART XVIII - EVIDENCE FOR TRIAL",
                url: "/opendoc-sicc-practice-directions/Part_18.html",
                escapedPath: "Part_18.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Singapore International Commercial Court Practice Directions",null,["Part_01.md","Part_02.md","Part_03.md","Part_04.md","Part_05.md","Part_06.md","Part_07.md","Part_08.md","Part_09.md","Part_10.md","Part_11.md","Part_12.md","Part_13.md","Part_14.md","Part_15.md","Part_16.md","Part_17.md","Part_18.md","Part_19.md","Part_20.md","Part_21.md","Part_22.md","Part_23.md","appendix.md"]]
            },
            
        {
                name: "Part_19.md",
                title: "PART XIX - TRIALS AND OTHER HEARINGS",
                url: "/opendoc-sicc-practice-directions/Part_19.html",
                escapedPath: "Part_19.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Singapore International Commercial Court Practice Directions",null,["Part_01.md","Part_02.md","Part_03.md","Part_04.md","Part_05.md","Part_06.md","Part_07.md","Part_08.md","Part_09.md","Part_10.md","Part_11.md","Part_12.md","Part_13.md","Part_14.md","Part_15.md","Part_16.md","Part_17.md","Part_18.md","Part_19.md","Part_20.md","Part_21.md","Part_22.md","Part_23.md","appendix.md"]]
            },
            
        {
                name: "Part_20.md",
                title: "PART XX - JUDGMENTS AND ORDERS",
                url: "/opendoc-sicc-practice-directions/Part_20.html",
                escapedPath: "Part_20.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Singapore International Commercial Court Practice Directions",null,["Part_01.md","Part_02.md","Part_03.md","Part_04.md","Part_05.md","Part_06.md","Part_07.md","Part_08.md","Part_09.md","Part_10.md","Part_11.md","Part_12.md","Part_13.md","Part_14.md","Part_15.md","Part_16.md","Part_17.md","Part_18.md","Part_19.md","Part_20.md","Part_21.md","Part_22.md","Part_23.md","appendix.md"]]
            },
            
        {
                name: "Part_21.md",
                title: "PART XXI - ENFORCEMENT OF JUDGMENTS AND ORDERS",
                url: "/opendoc-sicc-practice-directions/Part_21.html",
                escapedPath: "Part_21.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Singapore International Commercial Court Practice Directions",null,["Part_01.md","Part_02.md","Part_03.md","Part_04.md","Part_05.md","Part_06.md","Part_07.md","Part_08.md","Part_09.md","Part_10.md","Part_11.md","Part_12.md","Part_13.md","Part_14.md","Part_15.md","Part_16.md","Part_17.md","Part_18.md","Part_19.md","Part_20.md","Part_21.md","Part_22.md","Part_23.md","appendix.md"]]
            },
            
        {
                name: "Part_22.md",
                title: "PART XXII - APPEALS",
                url: "/opendoc-sicc-practice-directions/Part_22.html",
                escapedPath: "Part_22.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Singapore International Commercial Court Practice Directions",null,["Part_01.md","Part_02.md","Part_03.md","Part_04.md","Part_05.md","Part_06.md","Part_07.md","Part_08.md","Part_09.md","Part_10.md","Part_11.md","Part_12.md","Part_13.md","Part_14.md","Part_15.md","Part_16.md","Part_17.md","Part_18.md","Part_19.md","Part_20.md","Part_21.md","Part_22.md","Part_23.md","appendix.md"]]
            },
            
        {
                name: "Part_23.md",
                title: "PART XXIII - COSTS",
                url: "/opendoc-sicc-practice-directions/Part_23.html",
                escapedPath: "Part_23.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Singapore International Commercial Court Practice Directions",null,["Part_01.md","Part_02.md","Part_03.md","Part_04.md","Part_05.md","Part_06.md","Part_07.md","Part_08.md","Part_09.md","Part_10.md","Part_11.md","Part_12.md","Part_13.md","Part_14.md","Part_15.md","Part_16.md","Part_17.md","Part_18.md","Part_19.md","Part_20.md","Part_21.md","Part_22.md","Part_23.md","appendix.md"]]
            },
            
        {
                name: "appendix.md",
                title: "Appendix",
                url: "/opendoc-sicc-practice-directions/appendix.html",
                escapedPath: "appendix.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Singapore International Commercial Court Practice Directions",null,["Part_01.md","Part_02.md","Part_03.md","Part_04.md","Part_05.md","Part_06.md","Part_07.md","Part_08.md","Part_09.md","Part_10.md","Part_11.md","Part_12.md","Part_13.md","Part_14.md","Part_15.md","Part_16.md","Part_17.md","Part_18.md","Part_19.md","Part_20.md","Part_21.md","Part_22.md","Part_23.md","appendix.md"]]
            },
            
        {
                name: "index.md",
                title: "Singapore International Commercial Court Practice Directions",
                url: "/opendoc-sicc-practice-directions/",
                escapedPath: "index.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Singapore International Commercial Court Practice Directions",null,["Part_01.md","Part_02.md","Part_03.md","Part_04.md","Part_05.md","Part_06.md","Part_07.md","Part_08.md","Part_09.md","Part_10.md","Part_11.md","Part_12.md","Part_13.md","Part_14.md","Part_15.md","Part_16.md","Part_17.md","Part_18.md","Part_19.md","Part_20.md","Part_21.md","Part_22.md","Part_23.md","appendix.md"]]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()