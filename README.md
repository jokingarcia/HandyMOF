# HandyMOF
Testing MOFScript transformations

Prototype of the idea presented in paper "Testing MOFScript transformations with HandyMOF" ([http://onekin.org/content/testing-mofscript-transformations-handymof])

Model transformation development is a complex task. Therefore, having mechanisms for transformation testing and understanding becomes a matter of utmost importance. Understanding, among others, implies being able to trace back bugs to their causes. In model transformations causes can be related with either the input model or the transformation code. This work describes HandyMOF, a tool that first eases the transition between the effect (i.e. generated code file) and
the causes (i.e. input model and transformations) and then provides the means to check the transformation coverage obtained by a test suite. The challenges are twofold. First, the obtainment of input model suites which yield to a quantifiable transformation coverage. Second, providing fine-grained traces that permit to trace back code not just to the transformation rule but to the inner 'print' statements. A transformation that generates Google Web Toolkit (GWT) code is used as the running example.

Screencast of the tool: ([https://www.youtube.com/watch?v=5dCLK_Bcfgk])
