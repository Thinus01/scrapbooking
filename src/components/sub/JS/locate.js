function locate() {
  return (
    <>
      <section class="CodeContainer">
        <h1>Locate</h1>
        <div class="answer">
          <p>Array called nums</p>
          <p>Find target in array</p>
          <p>display index of first and last target's index</p>
          <p>Example 1:</p>
          <p>Input: nums = [5,7,7,8,8,10], target = 8</p>
          <p>Output: [3,4]</p>
          <p>Example 2:</p>
          <p>Input: nums = [5,7,7,8,8,10], target = 6</p>
          <p>Output: [-1,-1]</p>
        </div>
        <div class="thinking">
        <p>nums = [5,7,7,8,8,10]</p>
        <p>for (nums.length i++)</p>
        <p>if(i === target)</p>
        <p>output.push([i])</p>
        <p>console.log(output)</p>
        </div>
        <div class="solve">
        <p>let nums = [5,7,7,8,8,10];</p>
        <p>let target = 7;</p>
        <p>let output = [];</p>
        <p>for (let i = 0; i  nums.length; i ++) </p>
        <p>if (nums[i] === target) </p>
        <p>output.push(i);</p>
        <p>if (output.length === 0) </p>
        <p>  output = [-1,-1];</p>
        <p>console.log(output);</p>
        </div>
        
      </section>
      
    </>
  )
}

export default locate;
