// articles-data.js
// Real articles with meaningful, contextually appropriate images

const articlesData = [
    {
        image: "https://www.bing.com/th/id/OIP.HHb1uSYPynowrgc65RJncgHaHa?w=194&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.5&pid=3.1&rm=2&ucfimg=1",
        date: "January, 2025",
        title: "Steps to Safety: What to Do After an Assault",
        excerpt: "The animation from the UN Women Nigeria country office condemns stigma and examines the support needed by GBV survivors after the horrific experience.",
        link: "https://www.youtube.com/watch?v=tKa-2tnk2wk"
    },
    {
        image: "https://www.plan.org.au/wp-content/uploads/2020/11/201911-UGA-19-web.png.webp",
        date: "March 4, 2025",
        title: "How can we end violence against women and children in our lifetime?",
        excerpt: "Violence is preventable, and together, we can end violence against women and children in a lifetime. Join us! Share, learn & connect! ",
        link: "https://www.youtube.com/watch?v=3bp1pp_21sg&t=41s"
    },
    {
        image: "https://cdn.pixabay.com/photo/2017/02/12/14/00/justice-2060093_1280.jpg",
        date: "June 14th, 2023",
        title: "Victim of Domestic Violence? 5 Secrets the Prosecution Isn't Telling You",
        excerpt: "Do you know what the prosecutor won't tell you as the victim of a crime? In this video, we're going to discuss some of the most common things the prosecutor won't tell you",
        link: "https://youtube.com/shorts/ClK1Qo6n3x8?si=q7hjG7OpgwhpAvfk"
    },
    {
        image: "https://logos-world.net/wp-content/uploads/2023/06/Justice-Logo.png", // Women's rights protest with raised fists
        date: " March 14, 2023",
        title: "One in 3 Situations Where Domestic Violence Charges Get DISMISSED or REDUCED",
        excerpt: "Did she exaggerate her claims? Can you prove she lied? A criminal defense attorney keeps you informed and safe!",
        link: "https://youtu.be/8fq-NyxmoCM?si=sYny-vpzGeBME9CG"
    },
    {
        image: "https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Collections/Embargoed/05-03-2025_UN_Women_Brazil.jpg/image1170x530cropped.jpg", // Women's rights protest with raised fists
        date: "March 6, 2025",
        title: "One in Four Countries Report Backlash Against Women's Rights",
        excerpt: "UN Women's latest report shows that in 2024, nearly a quarter of governments worldwide reported a backlash on women's rights, despite decades of advocacy and progress.",
        link: "https://news.un.org/en/story/2025/03/1160866"
    },
    {
        image: "https://images.unsplash.com/photo-1611432579699-484f7990b127?w=600&h=400&fit=crop", // Women's march with signs
        date: "November 2024",
        title: "Global Statistics on Gender-Based Violence",
        excerpt: "In 2022, 48,800 women were murdered by a partner or family member—a woman or girl killed every 11 minutes. The Beijing+30 review calls leaders to action.",
        link: "https://ngocsw.org/global-stats-on-gbv/"
    },
    {
        image: "https://static01.nyt.com/images/2024/05/24/multimedia/24ozletter-cpqw/24ozletter-cpqw-articleLarge.jpg?quality=75&auto=webp&disable=upscale", // Women in conflict/humanitarian context
        date: "September, 2025",
        title: "Creating safe and empowering public spaces with women and girls",
        excerpt: "Sexual harassment and other forms of sexual violence in public spaces, both in urban and rural settings, are an everyday occurrence for women and girls in every country around the world.",
        link: "https://www.unwomen.org/en/what-we-do/ending-violence-against-women/creating-safe-public-spaces"
    },
    {
        image: "https://images.unsplash.com/photo-1592966556929-08111961c071?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVxdWFsaXR5fGVufDB8fDB8fHww", // Women in parliamentary/political setting
        date: "September 10, 2025",
        title: "Progress on Gender Equality and the SDGs: 2025 Gender Snapshot",
        excerpt: "As of January 2025, women held 27.2% of seats in national parliaments. Political leadership and comprehensive policy reforms are urgently needed to achieve Goal 5.",
        link: "https://www.un.org/sustainabledevelopment/gender-equality/"
    },
    {
        image: "https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production%20Library/11-04-2024-UNFPA-Mali-02.jpg/image1170x530cropped.jpg", // Hand making stop gesture
        date: "November 15, 2024",
        title: "One in Three Women Experiences Gender-Based Violence",
        excerpt: "Nearly one in three women and girls worldwide will experience physical or sexual violence during their lifetime. The 16 Days of Activism campaign calls for urgent action.",
        link: "https://news.un.org/en/story/2024/11/1157046"
    },
    {
        image: "https://www.unwomen.org/sites/default/files/styles/hq_hero_banner_2880/public/2025-09/snapshotexplainerhero_elsalvador_1920x850_1.jpg.webp?itok=gnjshJJW", // Women in leadership/group empowerment
        date: "September 2025",
        title: "Gender Equality in 2025: A $342 Trillion Choice for the World",
        excerpt: "Investing in women could lift hundreds of millions out of extreme poverty and add $342 trillion to the global economy by 2050. The choice is clear.",
        link: "https://www.unwomen.org/en/articles/explainer/gender-equality-in-2025-gains-gaps-and-the-342t-choice"
    },
   
    {
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop", // Purple ribbon awareness symbol
        date: "March 2025",
        title: "Violence Against Women: WHO Global Facts and Statistics",
        excerpt: "736 million women—almost one in three—have been subjected to physical or sexual intimate partner violence. Less than 40% of women who experience violence seek help.",
        link: "https://www.who.int/news-room/fact-sheets/detail/violence-against-women"
    },
    {
        image: "https://images.unsplash.com/photo-1573496774426-fe3db3dd1731?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1Y2Nlc3NmdWwlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D", // Diverse women together showing solidarity
        date: "2025",
        title: "UN Women Highlights 2024–2025: 15 Years of Impact",
        excerpt: "In celebration of UN Women's 15th anniversary, see compelling results from the past year and how UN Women delivers for all 4 billion women and girls globally.",
        link: "https://www.unwomen.org/en/annual-report/2025"
    },
   
    {
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop", // Women marching/activism
        date: "October 6, 2025",
        title: "Vital to empower the girl child",
        excerpt: "We clearly see where the injustices begin and how they accumulate through the lives of the most marginalised girls and women,” observes Silvia Montoya, director of the Unesco Institute for Statistics.",
        link: "https://gga.org/vital-to-empower-the-girl-child/"
    },
    {
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop", // Women in developing countries/education
        date: "2025",
        title: "UNDP Gender Equality Strategy 2022-2025: Annual Report",
        excerpt: "In 2024, nearly 300 million women benefited from UNDP-supported initiatives, including 140 million supported to vote and lead, and 137 million accessing essential services.",
        link: "https://www.undp.org/publications/undp-gender-equality-strategy-2022-2025-2024-annual-report"
    },
    {
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop", // Protest sign/activism
        date: "2025",
        title: "Facts and Figures: Ending Violence Against Women",
        excerpt: "70% of women experience gender-based violence in humanitarian contexts. Child marriage rates are 4 percentage points higher in conflict-affected areas.",
        link: "https://www.unwomen.org/en/articles/facts-and-figures/facts-and-figures-ending-violence-against-women"
    },
    {
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop", // Women in education/learning
        date: "2025",
        title: "World Bank: Violence Against Women and Girls Data",
        excerpt: "Gender-based violence remains one of the major obstacles to women's increased agency. Boys and men must be engaged to reduce the prevalence of such violence.",
        link: "https://genderdata.worldbank.org/en/topics/violence"
    },
    {
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop", // Women supporting each other
        date: "September 2025",
        title: "Domestic Violence Statistics by Country 2025",
        excerpt: "736 million women have been subjected to intimate partner violence at least once in their life. Around 51,100 women were killed by intimate partners in 2023.",
        link: "https://www.theglobalstatistics.com/domestic-violence-statistics-by-country/"
    },
    {
        image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop", // Women in professional/economic setting
        date: "2025",
        title: "Gender-Based Violence: OECD Data and Analysis",
        excerpt: "Across 27 OECD countries, almost a quarter (23%) of women report having experienced physical or sexual violence by an intimate partner at some point.",
        link: "https://www.oecd.org/en/topics/sub-issues/gender-based-violence.html"
    },
    {
        image: "https://s7d1.scene7.com/is/image/wbcollab/gbv-header?qlt=100&resMode=sharp2", // Justice scales/human rights concept
        date: "2025",
        title: "Violence Against Women: World Bank Gender Data Portal",
        excerpt: "More than 1 in 4 women (26%) aged 15 and older have suffered violence at the hands of their partners. Violence causes lifelong physical, mental, and reproductive health damages.",
        link: "https://genderdata.worldbank.org/en/data-stories/overview-of-gender-based-violence"
    },

    {
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop", // Diverse women showing unity
        date: "2025",
        title: "UN General Assembly: Gender Equality Overview",
        excerpt: "Gender equality is not only a fundamental human right but essential for sustainable development. Achieving it requires political leadership and comprehensive reforms.",
        link: "https://www.un.org/en/global-issues/gender-equality"
    },
    {
        image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=400&fit=crop", // Women using technology/digital empowerment
        date: "June 2025",
        title: "Technology-Facilitated Gender-Based Violence in G7 Countries",
        excerpt: "Complex forms of GBV are on the rise, such as those facilitated by technology. OECD maps policy responses to address online harassment and cyberbullying.",
        link: "https://www.oecd.org/en/topics/sub-issues/gender-based-violence.html"
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1675034811927-206fb5ecafe2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGVtcG93ZXJtZW50fGVufDB8fDB8fHww", // Women entrepreneurs/economic empowerment
        date: "2024",
        title: "Women's Economic Empowerment: World Bank Overview",
        excerpt: "Economic participation is key to gender equality. The World Bank supports initiatives helping women access finance, education, and entrepreneurship opportunities.",
        link: "https://www.worldbank.org/en/topic/gender/overview"
    },
    {
        image: "https://www.unwomen.org/sites/default/files/Communications/Headquarters/Images/1-PeaceSecurity_675x350.jpg?la=en", // Peace dove/peaceful gathering
        date: "2025",
        title: "Women, Peace and Security Agenda: UN Women",
        excerpt: "Women's participation in peace processes leads to more sustainable peace. 113 countries had national action plans on women, peace and security in 2025.",
        link: "https://www.unwomen.org/en/what-we-do/peace-and-security"
    },
    {
        image: "https://www.unwomen.org/sites/default/files/Headquarters/Images/Sections/News/In%20Focus/Climate%20change/InFocus_COP23_banner_Mali_WorldBank_960X640.jpg?h=640&w=960", // Climate/environment with women
        date: "2025",
        title: "Climate Change and Gender: Women on the Frontlines",
        excerpt: "80% of people displaced by climate change are women. Climate change could push another 158 million women into poverty by 2050, nearly half in sub-Saharan Africa.",
        link: "https://www.unwomen.org/en/news/in-focus/climate-change"
    }
];