# Climber Cards
<a href="https://github.com/ClimberAB/ClimberCards/releases/download/v1.3.1/cl-cards-v1.3.1.zip" target="_blank"><img src="./screenshots/downloadbutton.png?raw=true" 
alt="Download latest release" width="400" height="40" border="0" /></a>

## Most recent update 1.3.1 - 2018-09-10
### Fixed
- Modules load order (Issue 7 - Visualization not found on the server)

Previous updates can be found here, <a href="CHANGELOG.md"> CHANGELOG </a>.

> Table extension with cards as cells, developed for showcasing items with images. Responsive design and selection enabled, both click and swipes. Multiple layout options and Select and Go To Sheet mode

***Tested from Qlik Sense June 2017 (in the initial release of June 2017, extensions load slow. It's fixed in patch 1 )***

## Screenshots
Portrait 
<img src="./screenshots/layout_modes_portrait.PNG?raw=true" alt="Portrait" />
Landscape
<img src="./screenshots/layout_modes_landscape.PNG?raw=true" alt="Landscape" />
## Installation

1. Download the latest version
2. Qlik Sense Desktop
	* To install, copy all files in the .zip file to folder "C:\Users\[%Username%]\Documents\Qlik\Sense\Extensions\Cards"
3. Qlik Sense Server
	* See instructions <a href="http://help.qlik.com/en-US/sense/Subsystems/ManagementConsole/Content/import-extensions.htm"> how to import an extension on Qlik Sense Server </a>

## Configuration
<img src="./screenshots/propertypanel_dimensions.PNG?raw=true" alt="Dimensions" />
* 1st dimension is the unique identifier that will be selected if a card is selected. The identifier won't show up on the card. 
* 2nd dimension is the image and needs a url for source. 
  * Example url string: 'http://ia.media-imdb.com/images/M/MV5BMjEyMjcyNDI4MF5BMl5BanBnXkFtZTcwMDA5Mzg3OA@@._V1_UX34_CR0,0,34,50_AL_.jpg'
  * Example reference an image from Qlik Sense default repository: '../content/Default/Qlik_default_flower.png'
* 3rd dimension is the title of the card. 
* 4th dimension is optional and will show up under the title.  

# Selection modes
It is possible to use selections to go to another sheet. 
When "Select and goto sheet" is enabled, swipe selections are disabled. (I.e. it is only possible to select one row in the table.) If one value is already selected it will be deselected and no goto sheet action taken.  
<img src="./screenshots/propertypanel_selectionmode.PNG?raw=true" alt="Selection mode - Selections" />  
<img src="./screenshots/propertypanel_selectionmode_gotosheet.PNG?raw=true" alt="Selection mode - Select and goto sheet" />  
# Layout modes  
See large screenshots above for examples on how the different options display.  
<img src="./screenshots/propertypanel_layoutmode.PNG?raw=true" alt="Layout modes" />  

Layout mode options
* Small
* Medium
* Large
  
Image mode options
* Portrait
* Landscape
* Square

Image Size mode options
* Contain - Scale to the largest size such that both its width and its height can fit inside the content area
* Cover - Scale to be as large as possible so that the background area is completely covered by the background image. Some parts of the background image may not be in view within the background positioning area.
* Fill - Scale to fill the space. This may significantly distort the image.


Sample app can be found here under the project folders \sample app\Cards.qvf.  

## Climber Extensions
Like this extension? Check out the other Climber made extensions below.

**Custom Report**
* https://github.com/ClimberAB/ClimberCustomReport
* https://www.youtube.com/watch?v=mCb2t4aNppE

**Selection Bar**
* https://github.com/ClimberAB/ClimberSelectionBar
* https://www.youtube.com/watch?v=4fxrphADRKw

**KPI**
* https://github.com/ClimberAB/ClimberKPI
* https://www.youtube.com/watch?v=9zdfYshNel4

## Contributing
Contributing to this project is welcome. The process to do so is outlined below:

1. Create a fork of the project
2. Work on whatever bug or feature you wish
3. Create a pull request (PR)

I cannot guarantee that I will merge all PRs.

## Author

* http://github.com/ClimberAB


## Change Log

See <a href="CHANGELOG.yml"> CHANGELOG </a>

## Known Issues and Limitations

The extension is intended for top lists and dashboard. Because of that we have not included support for very large tables. The limit is currently 10' cells.

## License & Copyright
The software is made available "AS IS" without any warranty of any kind under the MIT License (MIT).

See <a href="LICENSE.md">Additional license information for this solution. </a>




