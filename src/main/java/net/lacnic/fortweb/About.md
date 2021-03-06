# About Fort project
###The challenge: vulnerability of routing systems

Routing is one of the few components of Internet infrastructure that remains unsecure. Today, routing systems can be easily hijacked to conduct website blocks, eavesdrop on users through snooping and redirect traffic to bogus destinations. These vulnerabilities can prevent the free flow of information across the globe as well as threaten users’ security and privacy.

Pakistan’s censorship order to block Youtube in 2008 is perhaps one of the most well-known cases. In an attempt to take the site down, Pakistan Telecom falsely claimed to be the correct route for a range of YouTube’s IP addresses; soon traffic was directed to the Pakistan ISP, taking YouTube down worldwide for over two hours. Similarly, Brazil’s infamous blockage of WhatsApp in 2016, affected users in the entire region when wireless phone carriers complying with the court order accidently blocked the app outside of Brazil by broadcasting incorrect routing information.

False route announcements –by accident or design– continue to happen and with frequency. Internet Society’s MANRS initiative (Mutually Agreed Norms for Routing Security) reported as many as 13,935 total incidents in 2017. Within Latin America and the Caribbean, Brazil led the regional ranking on routing incidents with a total of 450 cases, and was second worldwide following the United States, along with Russia and India which ranked third and fourth respectively.

Internet standard developing bodies have long struggled to identify strategies to render routing more secure. To date, Resource Public Key Infrastructure (RPKI) has been the most successful initiative to secure BGP routing, by resorting to the use of signatures as a means to validate the authenticity of IP routing information, preventing route hijacks and snooping.

RPKI deployment however, is still in its earlier stages of development.

###Project Objectives

The goal of the project is to contribute to RPKI deployment as a means to render routing systems –a basic building block of Internet infrastructure– more secure and resilient. In turn, the project will contribute to the prevention of route hijacks and the exposure of censorship and surveillance attempts that rely on vulnerabilities of the routing system.

The project will work towards three specific objectives:

Develop a Resource Public Key Infrastructure (RPKI) Validator;
Conduct a deployment campaign in Latin America and the Caribbean
Produce a report and develop a tracking tool on Routing Security and Internet Freedom to study routing incidents in the region and expose intentional hijacks.


For RPKI validation to take hold, it is crucial for multiple initiatives to push its implementation forward. LACNIC and NIC.MX are currently collaborating to develop a free, open source RPKI Validator software. This software will allow operators to validate the BGP routing information against the RPKI repository for use in router configuration and resolution. The validator will include a script by which the ISPs that deploy the software, will receive periodical notification of failed route announcements. While these notifications are not necessary for validation to work, they will serve to generate general awareness about the extent of routing incidents and importance of implementing RPKI among operators.

The only functioning Validator in place is the one developed and maintained by RIPE NCC (https://www.ripe.net/manage-ips-and-asns/resource-management/certification/tools-and-resources, https://github.com/RIPE-NCC/rpki-validator), while other efforts have wound down due to lack of funding. These include: (a) RPSTIR (Relying Party Security Technology for Internet Routing): http://sourceforge.net/projects/rpstir/, https://github.com/bgpsecurity/rpstir; and Dragon Research Labs Rcynic validator software, funded by ARIN and the US Department of Homeland Security which is no longer active: http://subvert-rpki.hactrn.net/trunk/rcynic/.

With the requested funds, LACNIC and NIC.MX will continue collaborating to complete the development of the validator and will complement this effort with an RPKI deployment campaign in Colombia, Ecuador and Costa Rica and through the Academic Network Red Clara which has regional reach. The goal will be to make routing infrastructure more secure in the region, as a means to prevent route hijacks which result in website blocks and sniffing.

In addition, the project proposes to produce a report and develop a tracking tool on Routing Security and Internet Freedom. The report will document and analyze routing incidents in the region as a means to establish a baseline against which to study the evolution of these incidents. In addition, to track incidents moving forward, the project team will develop an open access, digital tool which will collect data from the LACNIC and RIPE validators to document new incidents and identify regional trends in route hijacks. The tracking tool will have a user interface where users will be able to view data and generate simple customized graphs based on the parameters selected by the user (such as time range, countries to be compared, among other). This user interface will explain also how data is collated. Expected users will include IT management and policy decision makers, Internet Freedom activists and academics. The primary goal of both the report and tracking tool will be to expose intentional hijacks that infringe users security, privacy and free access to information in the Internet, drawing a link between core infrastructure and Internet Freedom. The report will be used as a key resource and promoted along the validator.

###Impact on people living in oppressive environments

RPKI deployment can help protect users in repressive environments not by preventing, but rather by exposing privacy breaches as well as censorship and surveillance attempts that rely on vulnerabilities of the routing system to operate. Specifically, the project will seek to give visibility to these abuses through the Routing Security and Internet Freedom report and tracking tool.

When the Pakistan incident broke out, Computer Science Professor Steven M. Bellovin at Columbia University asked: “When is the pain from routing incidents great enough that we’re forced to act?” Improving the security of routing systems is a long overdue effort that needs to be tackled to render the Internet a safe and free environment for users, particularly those at risk of censorship and surveillance. Routing incidents are so frequent, that several attempts to curtail Internet Freedom and users privacy go unnoticed. The project expects to delve deeper into this problematic, particularly in the context of Latin America and the Caribbean.

Why the project is needed and unique

The project is needed and unique for four reasons:

1. The project seeks to contribute to the consolidation of RPKI as a means to tackle routing security by developing an additional interoperable software for RPKI Validation to diversify alternatives available –beyond RIPE’s Validator which the only one fully functional today. This adheres to best practices for the development of Internet standards and infrastructure.

   Routing today is vulnerable to hijacking, and the use of digital certificates applied to routing information is the most effective solution devised to date to make traffic more secure.

   For RPKI to work, two things need to happen: first, those who have been assigned IP addresses must certify their resources obtaining a cryptographic key; and second, routing information (BGP routes) needs to be verified against the RPKI database or repository –hosted by a validator software– to determine its authenticity.

   Today, the only functioning validator upon which the whole RPKI technology depends is that of RIPE NCC. To ensure the resilience of Internet Infrastructure, it is a common standard to have at least two interoperable softwares, and the greater number of interoperable tools to support it, the more robust RPKI can become to secure routing.

   A recent bug found in RIPE’s validator in 2018 speaks of the risk of relying on a single tool. NAP Ecuador employed RIPE’s validator to verify routing information, and found that the session between the router and validator would crush, preventing the verification of valid routes. The bug was eventually attributed to a combination of somewhat obscure factors: the configuration of the CISCO Routers used by NAP Ecuador combined with the structure of the ROAs certificates issued by RIPE set off a coding error. While RIPE works with different iterations of the validator to ensure its robustness, the bug was found in all versions of the software.

   If RPKI is to take off as the primary mechanism to make routing more secure, it is important to develop additional validators.

2. The project strives to push for further RPKI deployment in a region that shows great potential to make a qualitative leap forward in routing security as indicated by the percentage of operators who currently do resource certification.

   Latin America and the Caribbean is one of the leading regions in RPKI deployment with an estimated of 27% of operators having implemented Resource Verification.

   As shown by this extensive RPKI penetration to date, the region shows great potential to make a qualitative leap forward in RPKI adoption, rendering traffic more secure. For RPKI to effectively work, widespread adoption is needed and validators are key to ensure its proper functioning.

   This will in turn benefit citizens, journalist and activist from countries in the LAC region and beyond that face privacy threats and where information flows are being manipulated through techniques such as website blockages. In the short run, the project also expects to benefit end-users in the region by exposing privacy breaches as well as censorship and surveillance attempts that rely on vulnerabilities of the routing system to operate.

3. The project encourages the involvement of the technical community in developing technical solutions to ensure Internet Freedom and promote civil society needs

   The most effective way for organizations from technical community to contribute Internet Freedom is precisely through the delivery of technical solutions that render the network a safer and secure tool for citizens worldwide.

4. The project promotes the involvement of developers and technical community from the global south and encourage collaborations south-to-south as a means to tackle security gaps and render Internet more resilient to censorship threats.
