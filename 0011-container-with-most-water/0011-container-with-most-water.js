/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let pointerI = 0;
    let pointerJ = height.length-1;
    
    
    while(pointerJ>pointerI){
        let lastNum = height[pointerJ];
        let firstNum = height[pointerI];
        
        currArea = Math.min(firstNum, lastNum) * (pointerJ-pointerI);
        if(currArea>maxArea){
            maxArea=currArea;
        }
        if(lastNum>firstNum){
            pointerI++
        }
        else
            pointerJ--;
    }
    return maxArea

};

    //     let maxArea = 0;

//     for(let i =0; i<height.length; i++){
//         for(let j=i+1; j<height.length; j++){
//             let length = j - i;
//             let minHeight = Math.min(height[i], height[j])
//            if(maxArea < (length*minHeight)){
//                maxArea = length*minHeight;
//            }
//         }
//     }
//     return maxArea;