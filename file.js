        
        const dateRegex = /(\d+)\/(\d+)\/(\d+)/;
        const versionRegex = /(\d+)\.(\d+)/;

        let dateValue = dateRegex.exec(template);
        let versionValue = dateRegex.exec(template);

        for (let i = 0; i < 1; i++) {
            dateText = dateValue[i];
        }

        for (let i = 0; i < 1; i++) {
            versionText = versionValue[i];
        }

        var g1 = new Date();
        g1.setDate(g1.getDate() - 7);

        var g2 = new Date(versionText);
        
        if (g1.getTime() > g2.getTime())
            return "Need to Update" ;
        else
            return "Latest";
