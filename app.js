var clevertap = {
  event: [],
  profile: [],
  account: [],
  onUserLogin: [],
  notifications: [],
  privacy: []
};
// replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
clevertap.account.push({ id: "R74-K9K-R55Z" });
clevertap.profile.push({
  Site: {
    Name: `frost${Math.ceil(Math.random() * 100)}`,
    Email: `${Math.ceil(Math.random() * 100)}@gmail.com`
  }
});
clevertap.privacy.push({ optOut: false }); //set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({ useIP: false }); //set the flag to true, if the user agrees to share their IP data
(function() {
  console.log(clevertap);
  var wzrk = document.createElement("script");
  wzrk.type = "text/javascript";
  wzrk.async = true;
  wzrk.src =
    ("https:" == document.location.protocol
      ? "https://d2r1yp2w7bby2u.cloudfront.net"
      : "http://static.clevertap.com") + "/js/a.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(wzrk, s);
})();
