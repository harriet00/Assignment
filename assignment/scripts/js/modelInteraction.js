//adapted from example code 'benskitchen.com'

function fantaScene(){
    nSwitch = 0;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}

function cokezeroScene(){
    nSwitch = 1;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}

function costaScene(){
    nSwitch = 2;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}

function fantaAnimateScene(){
    nSwitch = 3;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}
// from x3dom site - i wanted to use it as a way of showing'upcoming redesign of coke bottle' but it wouldnt work for some reason
function redBottle()
    {
        if(document.getElementById('wire__MAT_Plastic').getAttribute('diffuseColor')!= '1 0 0')
            document.getElementById('wire__MAT_Plastic').setAttribute('diffuseColor', '1 0 0')& document.getElementById('model__MAT_Plastic').setAttribute('transparency', '0.0');

        else
            document.getElementById('wire__MAT_Plastic').setAttribute('diffuseColor', '0 0 0') & document.getElementById('model__MAT_Plastic').setAttribute('transparency', '0.8');;
    }

function wireFrame()
{
	var e = document.getElementById('wire');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);
}

function normalFrame()
{
	var e = document.getElementById('wire');
	e.runtime.togglePoints(false);
	e.runtime.togglePoints(false);
}