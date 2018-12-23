webpackJsonp([0xac80453a5ea1],{374:function(e,n){e.exports={data:{markdownRemark:{html:'<p>Imagine a world where you can host an API that is allowed 1 million free API calls per month, automatic scaling and zero maintenance. It is all possible with Amazon Web Services\' (AWS) Lambda functions. However getting started can be a bit confusing.</p>\n<p>There are many steps you need to follow and understand before deploying and executing your first lambda function. But it\'s not as hard as you think. This blog post will show you how you can easily get started with AWS\' "functions as a service" platform.</p>\n<p><strong>To do this part of the tutorial you will need to...</strong></p>\n<ol>\n<li>Have knowledge of how to read JavaScript and JSON</li>\n<li><a href="https://www.amazon.com/ap/signin?openid.assoc_handle=aws&#x26;openid.return_to=https%3A%2F%2Fsignin.aws.amazon.com%2Foauth%3Fresponse_type%3Dcode%26client_id%3Darn%253Aaws%253Aiam%253A%253A015428540659%253Auser%252Fhomepage%26redirect_uri%3Dhttps%253A%252F%252Fconsole.aws.amazon.com%252Fconsole%252Fhome%253Fregion%253Dus-east-1%2526state%253DhashArgs%252523%2526isauthcode%253Dtrue%26noAuthCookie%3Dtrue&#x26;openid.mode=checkid_setup&#x26;openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&#x26;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&#x26;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&#x26;action=&#x26;disableCorpSignUp=&#x26;clientContext=&#x26;marketPlaceId=&#x26;poolName=&#x26;authCookies=&#x26;pageId=aws.ssop&#x26;siteState=registered%2Cen_US&#x26;accountStatusPolicy=P1&#x26;sso=&#x26;openid.pape.preferred_auth_policies=MultifactorPhysical&#x26;openid.pape.max_auth_age=120&#x26;openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&#x26;server=%2Fap%2Fsignin%3Fie%3DUTF8&#x26;accountPoolAlias=&#x26;forceMobileApp=0&#x26;language=en_US&#x26;forceMobileLayout=0">Have an AWS account</a></li>\n</ol>\n<h3>Getting Started</h3>\n<p>First, you need to sign into the AWS console. Then type "Lambda" in the search field under where it says AWS services, and hit enter.</p>\n<p>Then press "Create a Lambda Function".</p>\n<p>After that, you will be presented with the blueprints page. Here there are several pre-made functions that you could use as examples or starter templates. As of June 2017 there is only Python and Node.js runtimes on the blueprint page, but you are able to also use Java (this includes all JVM languages such as Clojure and Scala) and .NET (C#) if you deploy from the command line. Since I\'m a Node guy, I use Node.</p>\n<p>Now go to where it says "select runtime", and select <code class="language-text">Node.js 6.10</code>. Then select the "hello-world" blueprint. You might need to type "hello-world" into the filter field, adjacent of the runtime field, for the "hello-world" blueprint to appear on the screen.</p>\n<p>The next page is where you configure triggers for the function. There are many choices. For example you can cause the function to be triggered through an HTTP request, when a file gets uploaded to S3 (Amazon\'s cloud storage service) or if something gets pushed to CodeCommit (Amazon\'s version control repository service). <a href="/blog/deploy-a-website-api-with-serverless/">Ideally these are better added with automation through Serverless</a> or CloudFormation (Amazon\'s infrastructure automated deployment service).  Now, press next.</p>\n<p>Now type "hello-lambda" for the function name, and leave the description as is.</p>\n<p>Replace the code with the following:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token string">\'use strict\'</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Loading function\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nexports<span class="token punctuation">.</span><span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">,</span> context<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">//console.log(\'Received event:\', JSON.stringify(event, null, 2));</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Hello lambda!\'</span><span class="token punctuation">)</span>\n    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>key1<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Echo back the first key value</span>\n    <span class="token comment">//callback(\'Something went wrong\');</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3>Roles</h3>\n<p>Scroll down to where it says "Role". A role is where you give your function rights to access other AWS resources such as: giving permission to make logs with CloudWatch or to interact with an S3 bucket. A common practice for naming roles, is to name a role based on what the function with this role is doing. If a function is a contact form response then you could call it "contact-form-responder". A role can have several "Identity Access Management (IAM) policies" Which are the statements that allow the function to use AWS resources. These are written in JSON.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">{</span>\n    <span class="token string">"Effect"</span><span class="token punctuation">:</span> <span class="token string">"Allow"</span><span class="token punctuation">,</span>\n    <span class="token string">"Action"</span><span class="token punctuation">:</span> <span class="token string">"logs:CreateLogGroup"</span><span class="token punctuation">,</span>\n    <span class="token string">"Resource"</span><span class="token punctuation">:</span> <span class="token string">"arn:aws:logs:us-east-1:123456789012:log-group:my-log-group"</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><strong>Each policy statement has the following</strong></p>\n<ul>\n<li>\n<p><strong>Effect:</strong> either "Allow" or "Deny" the resource specified in the policy. Effect is "Deny" by default so you would normally only write "Allow".</p>\n</li>\n<li>\n<p><strong>Action:</strong> is what actions the policy allows. In the above example you are giving the ability to create a new log group. This can then be used to view logs from the AWS resource using this policy.</p>\n</li>\n<li>\n<p><strong>Resources:</strong> This is which resources you have given the policy access to. In the example above we have given access to the CloudWatch logs. The syntax means: <code class="language-text">arn:partition:service:region:account-id:log-group-name</code>.</p>\n</li>\n</ul>\n<p>Here are some great resources for creating roles...</p>\n<ul>\n<li><a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">AWS docs for IAM Policies</a></li>\n<li><a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-cloudwatch-logs">AWS docs for Amazon Resource Names</a></li>\n<li><a href="https://iam.cloudonaut.io/reference/index.html#/">Cloudonaut - a great reference for finding the right policy for your use case</a></li>\n</ul>\n<p>Now time to add a role to our function. Name the role, "lambda-demo". Don\'t select any policy templates. We will need logs but, by default logs will already be enabled when you create a role.</p>\n<p>Now scroll down to where it says "Advanced settings" and press on it. Here you define the configuration for your function. Most importantly "memory" and "timeout". The main thing to consider here is that, beyond your free 1 million API calls per month and 400,000 GB-seconds of compute time per month, how much you are billed depends on how much memory you add to your function and how long it runs. This can be a tricky balance though since sometimes when you increase memory you can decrease the time functions run. Check out the <a href="https://aws.amazon.com/lambda/pricing/">AWS Lambda pricing page</a> for more information.</p>\n<p>Timeout is how long the function can go without finishing execution. If the Timeout is set at three seconds, and the function takes 4 seconds to execute, it will error out.</p>\n<p>Now press "Next" and then "Create function"</p>\n<h3>Testing Your New Function</h3>\n<p>It usually takes under a minute for your function to be provisioned. When the next screen appears, press "Test". A modal should pop up. In the field where it says <code class="language-text">&quot;key1&quot;: &quot;value1&quot;</code> replace this with <code class="language-text">&quot;key1&quot;: &quot;My first lambda output!&quot;</code> Then scroll down and press "Save and test".</p>\n<p>After it runs you should see the following in the bottom of the screen...</p>\n<p><div>\n          <a\n            class="gatsby-resp-image-link"\n            title="original image"\n            href="/static/lambda-function-complete-704d0d719c2ea83aef1113d3fca4c0b6-f4325.png"\n            style="display: block"\n            target="_blank"\n          >\n            <div\n              class="gatsby-resp-image-wrapper"\n              style="position: relative; z-index: -1; "\n            >\n              <div\n                class="gatsby-resp-image-background-image"\n                style="padding-bottom: 47.48858447488584%;position: relative; width: 100%; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABGUlEQVQoz51R2W6EMBDL/38kYil3gABJOMLhxaPSoj70YSNZJM5geyaq9QZ1o9H3PYwx0LpB1VmEsGHbAsK2C2QfwvXdBPu+4zxPHMcBLq012raFst7JoWkaQdd1MP0Aay2csxj8CuNm2HHEeIE8sSyLiN2gAb9qmWdM04R1XYV8LiY6/nD/LSZW3nsURSGubJlg+zTJ81zuyD3Tt739GRHb5H4YBvlHcR4sTtMUURSJCMUZn3xZliJa1zXqqkJRVkjLX56CFJNu2DLbZEq68JIkoxPVJUCDLMtkz1knr9dl/iX1xPw9MoJair0zCV3uF7vn8Sxmap5p7pyTmTPVPXvW8KEUySRJxI2Xt9inS9EtjmMRpPgt+CnehCW5znD/qJkAAAAASUVORK5CYII=\'); background-size: cover;"\n              >\n                <img\n                  class="gatsby-resp-image-image"\n                  style="width: 100%; margin: 0; vertical-align: middle; position: absolute; box-shadow: inset 0px 0px 0px 400px white;"\n                  alt="lambda function complete"\n                  title=""\n                  src="/static/lambda-function-complete-704d0d719c2ea83aef1113d3fca4c0b6-e273d.png"\n                  srcset="/static/lambda-function-complete-704d0d719c2ea83aef1113d3fca4c0b6-00123.png 162w,/static/lambda-function-complete-704d0d719c2ea83aef1113d3fca4c0b6-7fac2.png 325w,/static/lambda-function-complete-704d0d719c2ea83aef1113d3fca4c0b6-e273d.png 650w,/static/lambda-function-complete-704d0d719c2ea83aef1113d3fca4c0b6-9b2cb.png 975w,/static/lambda-function-complete-704d0d719c2ea83aef1113d3fca4c0b6-bf9ac.png 1300w,/static/lambda-function-complete-704d0d719c2ea83aef1113d3fca4c0b6-f79cb.png 1950w,/static/lambda-function-complete-704d0d719c2ea83aef1113d3fca4c0b6-f4325.png 2190w"\n                  sizes="(max-width: 650px) 100vw, 650px"\n                />\n              </div>\n            </div>\n          </a>\n          </div></p>\n<p>You should see that the output is "My first lambda output!". This displays in the top of the "Execution result: succeeded" screen.</p>\n<p>Then under the "Log output" section of this screen you should see where it says "Hello lambda!".</p>\n<p>This is the same log message that will display in Cloud Watch. Press where it says "logs" in parenthesis to see this logstream, and the ones before it.</p>\n<p> If you have any more questions, <a href="/contact/">feel free to contact me</a>.</p>',frontmatter:{title:"How to Get Started with AWS Lambda",date:"06/17/2017"}}},pathContext:{slug:"/blog/getting-started-with-aws-lambda/"}}}});
//# sourceMappingURL=path---blog-getting-started-with-aws-lambda-a28cba2f161701746731.js.map