<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
## API v2 Changelog

Major changes in Arcadier's APIs and Documentation will be logged here way before they are pushed to live. 
<div align="center">
  <button id="filter">Test Button</button>
  <script>
    $("#filter").click(function(){
      console.log("Hi")
      $.getJSON("https://raw.githubusercontent.com/Arcadier/API-Changelog/master/Postman%20Collections/Arcadier_API_v2.0.json", function(result){
        console.log(result.info.name);
      })
    });
  </script>
</div>
<p align="center"><strong>(6 February 2020) Item Search APIs</strong></p>

Added sorting query parameters to 
* [Get All Items](https://apiv2.arcadier.com/?version=latest#c06e85df-93f9-446c-a9b2-426296185d0d)
* [Search for items - Params in URL](https://apiv2.arcadier.com/?version=latest#c6d3c581-2556-4cb0-a7f1-daed8733f9fd)
* [Search for items - Params in JSON body](https://apiv2.arcadier.com/?version=latest#61b718db-2d07-4af1-992d-520c0fe259c0)

Sorting Parameters:

|Parameter | Filter|
|:------------:|:-------------:|
|created | Sort results in ascending time of creation (earliest to latest)|
|-created | Sort results in descending time of creation (latest to earliest)|
|updated | Sort results in ascending time since last update (earliest to latest)|
|-updated | Sort results in descending time since last update (latest to earliest)|

---

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
