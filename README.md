# avgzing.github.io
New Website! 


# How to set up site
### Domain
Set up domain on Freenom, standard for 12 months free, set calendar reminder to renew every 12 months
**NOTE:** If domain is being changed, be sure to go to the google search sonsole https://search.google.com/u/2/search-console and go to settings and establish a change of address. If this doesn't work, then try to remove the old content from google and redo the google search section.

### Nameservers, DNS, Github forwarding, WHOIS
Sure, you can URL forward from freenom to the github.io site, and this is the easy way to do it if it's not a major domain requiring https. But you want https, don't you? That means... Cloudflare.

At https://dash.cloudflare.com, a domain can only be registered if it has valid nameservers and a whois record. However, Freenom will not enable a whois until the domain actually redirects somewhere. But the problem is, if you set up Freenom nameservers, URL forwarding will be disabled. So where's the solution?

The solution now comes from github itself. https://docs.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain. If you see that site, you'll see that it tells you how to set up DNS. 
1. Open the domain in freenom and set it to freenom nameservers
2. Still in freenom, navigate to DNS and create a CNAME with name www and content either <website domain> or <website github.io link>
3. Then, create 4 A records with either no name or avgzing.ga as the name, and point them to 185.199.108.153, 185.199.109.153, 185.199.110.153, and 185.199.111.153
4. Now, leave freenom and go to the github repository settings, and set the custom domain as <website domain>, without the www. 
5. Visit https://www.whatsmydns.net and enter the domain. Test that A records point to the IPs, that NS nameservers are Freenom's.
6. On the same site, enter the www of the domain. Make sure that there exists a CNAME pointing to the intended target as set in Step 2.
7. If all is set up, you should be good for Cloudflare: it may take some waiting for a few days, but add a site at https://dash.cloudflare.com. 
8. With the site added, optimizations are optional, but may break parts of the site. Enable HTTPS, but don't force everything to be HTTPS, as this may break external non-https-links. 
9. Be sure to transfer DNS to cloudflare: all DNS will now be managed through here.
10. Reopen freenom, and go to the nameservers tab: switch to custom nameservers, and change them to whatever Cloudflare tells you to. (Note that steps 8-10 are interchangeable)
11. You should now be all set with https and proper domain forwarding! 

### Google Search
https://search.google.com/u/2/search-console
1. Enter the site there
2. Open https://dash.cloudflare.com and navigate to the intended site's DNS. Add a TXT record with @ as the name and google's suggested content as the content.
3. Now that your ownership is verified, google will add it to google search. 
4. If it has issues, create a sitemap.
