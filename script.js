const CANON={environment:"Ancient gigantic oaks and redwoods with timeless scale.",flora:"Subtly alien flora: glowing fungi, iridescent leaves, strange hanging vines.",creatures:"Moss-covered, antlered Woodland Spirits that blend naturally with trees.",style:"High-fidelity photorealistic modern cinematic film; crisp, physically believable detail.",story:"Rony is the recurring main character. Visual storytelling only; no dialogue or talking-head presentation."};
const $=id=>document.getElementById(id);
function buildPrompt(){const scene=$("scene").value.trim();if(!scene){$("output").textContent="Please describe the scene first.";return}const wind=$("wind").checked?"Natural wind only: subtle movement in grass, leaves, hanging vines and creature fur; no unnecessary character or animal movement.":"Minimal natural movement only.";const prompt=`RONY FANTASY UNIVERSE — SCENE PROMPT

SCENE:
${scene}

CINEMATIC DIRECTION:
${$("shot").value}. ${$("movement").value}. Mood: ${$("mood").value}. Photorealistic modern cinema, realistic materials, natural depth of field, physically believable lighting, detailed atmosphere, cinematic composition.

WORLD CONTINUITY:
- Environment: ${CANON.environment}
- Flora: ${CANON.flora}
- Creatures: ${CANON.creatures}
- Visual style: ${CANON.style}
- Character/story: ${CANON.story}

MOTION:
${wind}

NEGATIVE / CONSISTENCY:
No cartoon look, no painterly texture, no random costume changes, no extra main characters, no modern objects, no futuristic technology, no exaggerated neon fantasy, no dialogue, no lip-sync, no sudden camera shake, no unnecessary creature movement.

Maintain exact visual continuity with previous Rony scenes.`;$("output").textContent=prompt;localStorage.setItem("ronyLastScene",scene)}
$("generateBtn").addEventListener("click",buildPrompt);
$("copyBtn").addEventListener("click",async()=>{await navigator.clipboard.writeText($("output").textContent);$("copyBtn").textContent="Copied";setTimeout(()=>$("copyBtn").textContent="Copy",1200)});
$("resetBtn").addEventListener("click",()=>{localStorage.removeItem("ronyLastScene");$("scene").value="";$("output").textContent="Describe a scene on the left, then generate a continuity-safe prompt."});
$("scene").value=localStorage.getItem("ronyLastScene")||"";