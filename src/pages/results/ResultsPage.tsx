import './ResultsPage.css';
import { Col, Form} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { GenerateText, saveGPTReplyBaic, saveGPTReplyDetailed, saveIndustriesBasic, saveIndustriesDetailed, saveOverviewBasic, saveOverviewDetailed } from './GPT';
import { SwitchPages7 } from '../../interfaces/SwitchPages';
import ResultsPageBasic from './components/ResultsBasic';
import ResultsPageDetailed from './components/ResultsDetailed';


export function ResultsPage ({submitFlagBasic, setSubmitFlagBasic, submitFlagDetailed, setSubmitFlagDetailed, questionsToUse, setQuestionsToUse}: SwitchPages7) {
    const [overviewBasic, setOverviewBasic] = useState<string>(saveOverviewBasic); // Contains the general overview chatGPT returns for the basic questions
    const [industriesBasic, setIndustriesBasic] = useState<string>(saveIndustriesBasic); // Contains the list of industries chatGPT returns for the basic questions
    const [overviewDetailed, setOverviewDetailed] = useState<string>(saveOverviewDetailed); // Contains the general overview chatGPT returns for the detailed questions
    const [industriesDetailed, setIndustriesDetailed] = useState<string>(saveIndustriesDetailed); // Contains the list of industries chatGPT returns for the detailed questions
    const [chatGPTReplyBasic, setChatGPTReplyBasic] = useState<string>(saveGPTReplyBaic); // Contains chatGPTs reply to the users input for basic questions
    const [chatGPTReplyDetailed, setChatGPTReplyDetailed] = useState<string>(saveGPTReplyDetailed); // Contains chatGPTs reply to the users input for detailed questions

    useEffect(() => {
        if (submitFlagBasic) {
            GenerateText("overview", "basic", "", setOverviewBasic);
            GenerateText("industry", "basic", "", setIndustriesBasic);
            console.log("basic");
            setSubmitFlagBasic(false);
        }
        if (submitFlagDetailed) {
            GenerateText("overview", "detailed", "", setOverviewDetailed);
            GenerateText("industry", "detailed", "", setIndustriesDetailed);
            console.log("detailed");
            setSubmitFlagDetailed(false);
        }
    }, [submitFlagBasic, setSubmitFlagBasic, submitFlagDetailed, setSubmitFlagDetailed]);

    function changeQuestionsToUse (event: React.ChangeEvent<HTMLSelectElement>) {
        setQuestionsToUse(event.target.value);
    }

    return(
        <div>
            <div>
                <div style={ {border: '3px white', padding: '4px', color: "#44506a", backgroundColor: "#F4E9E2", justifyContent:"right"} }>
                    <div>
                        <Col className = "textBox">
                            <Form.Select onChange={changeQuestionsToUse} style={{width: "19%", justifyContent: "flex-end", display: "flex"}} defaultValue={questionsToUse}>
                                <option value="basic">Basic Questions</option>
                                <option value="detailed">Detailed Questions</option>
                            </Form.Select>
                            {questionsToUse === "basic" && industriesBasic && overviewBasic && <ResultsPageBasic industriesBasic={industriesBasic} overviewBasic={overviewBasic} chatGPTReply={chatGPTReplyBasic} questionsToUse={questionsToUse} setGPTReplyBasic={setChatGPTReplyBasic}></ResultsPageBasic>}
                            {questionsToUse === "detailed" && industriesDetailed && overviewDetailed && <ResultsPageDetailed industriesDetailed={industriesDetailed} overviewDetailed={overviewDetailed} chatGPTReply={chatGPTReplyDetailed} questionsToUse={questionsToUse} setGPTReplyDetailed={setChatGPTReplyDetailed}></ResultsPageDetailed>}
                        </Col>
                    </div>
                </div>
            </div>
        </div>
    );
}