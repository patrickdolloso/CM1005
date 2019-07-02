var center1;
var center2;
var diagonal;
var cols;
var rows;
var cellSize;

function setup() 
{
    
    createCanvas(800,800);
    
    cols = 200;
    rows = 200;
    cellSize = 5;
    
    center1 = {x: 100, y: 200};
    center2 = {x: 400, y: 500};
    diagonal = dist(0,0,cols*cellSize,rows*cellSize); 
}

function draw() 
{

    background(0);
    
    noStroke();

    for(var j = 0; j < cols; j ++)
    {
        for(var i = 0; i < rows; i++)
        {
//            var w = i + 1;
//            var h = j + 1;
            var r1 = dist(center1.x,center1.y,i * cellSize,j * cellSize)/diagonal;
            var r2 = dist(center2.x,center2.y,i * cellSize,j * cellSize)/diagonal;

            var r = min(r1,r2);
            
            if(r1 > r2 )
            {
                fill(0,255*(1-r),0);
                        
                ellipse(
                i * cellSize,
                j * cellSize,
                cellSize,cellSize
                );
            }
            else
            {
                fill(r * 255,r * 255, 0);    
                        
                ellipse(
                i * cellSize,
                j * cellSize,
                cellSize,cellSize
                );
            }
    
        }
    }

 
}
