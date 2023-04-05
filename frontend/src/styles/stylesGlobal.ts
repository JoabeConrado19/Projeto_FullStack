import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    :root{

        /* Brand */

        --brand-1: #4529e6;
        --brand-2: #5126ea;
        --brand-3: #b0a6f0;
        --brand-4: #edeafd;

        /* Grey Scale */

        --gray-0: #0b0d0d;
        --gray-1: #212529;
        --gray-2: #495057;
        --gray-3: #868e96;
        --gray-4: #adb5bd;
        --gray-5: #CED4DA;
        --gray-6: #DEE2E6;
        --gray-7: #E9ECEF;
        --gray-8: #F1F3F5;
        --gray-9: #F8F9FA;
        --gray-10: #FDFDFD;
        --whiteFixed: #FFFFFF;

        /* Feedback */

        --alert-1: #CD2B31;
        --alert-2: #FDD8D8;
        --alert-3: #FFE5E5;
        --sucess-1: #18794E;
        --sucess-2: #CCEBD7;
        --sucess-3: #DDF3E4;

        /* Colors Random Profile */

        --random-1: #E34D8C;
        --random-2: #C04277;
        --random-3: #7D2A4D;
        --random-4: #7000FF;
        --random-5: #6200E3;
        --random-6: #36007D;
        --random-7: #349974;
        --random-8: #2A7D5F;
        --random-9: #153D2E;
        --random-10: #6100FF;
        --random-11: #5700E3;  
        --random-12: #30007D;
    }

    #headline-1-700 {
        font-weight: 700
        font-size: 2.75rem
        line-height: 3.5rem
    }

    #headline-2-600 {
        font-weight: 700
        font-size: 2.25rem
        line-height: 2.813rem
    }

    #headline-3-600 {
        font-weight: 600
        font-size: 2rem
        line-height: 2.5rem
    }

    #headline-3-500 {
        font-weight: 500
        font-size: 2rem
        line-height: 2.5rem
    }

    #headline-4-600 {
        font-weight: 600
        font-size: 1.75rem
        line-height: 2.188rem
    }

    #headline-4-500 {
        font-weight: 500
        font-size: 1.75rem
        line-height: 2.188rem
    }

    #headline-5-600 {
        font-weight: 600
        font-size: 1.5rem
        line-height: 1.875rem
    }

    #headline-5-500 {
        font-weight: 500
        font-size: 1.5rem
        line-height: 1.875rem
    }

    #headline-6-600 {
        font-weight: 600
        font-size: 1.25rem
        line-height: 1.563rem
    }

    #headline-6-500 {
        font-weight: 500
        font-size: 1.25rem
        line-height: 1.563rem
    }

    #headline-7-600 {
        font-weight: 600
        font-size: 1rem
        line-height: 1.25rem
    }

    #headline-7-500 {
        font-weight: 500
        font-size: 1rem
        line-height: 1.25rem
    }

    #body-1-400 {
        font-weight: 400
        font-size: 1rem
        line-height: 1.75rem
    }

    #body-1-600 {
        font-weight: 600
        font-size: 1rem
        line-height: 1.75rem
    }

    #body-2-400 {
        font-weight: 400
        font-size: 0.875rem
        line-height: 1.5rem
    }

    #body-2-500 {
        font-weight: 500
        font-size: 0.875rem
        line-height: 1.5rem
    }

    #button-big-text {
        font-weight: 600
        font-size: 1rem
    }

    #button-medium-text {
        font-weight: 600
        font-size: 1rem
    }

    #input-placeholder {
        font-weight: 400
        font-size: 1rem
    }

    #input-label {
        font-weight: 500
        font-size: 0.875rem
        line-height: 1.063rem
    }
`

export default GlobalStyle