import { Request, Response } from 'express';
export const handleChat = (req: Request, res: Response) => {
  const { persona, user, history } = req.body;
  const { greeting_prompt, signature_lines } = persona;
  const userInput = user.reported_issues?.join(', ') || 'Unknown issues';
  const response =
    history.length === 0
      ? \`\${greeting_prompt} \${userInput.toUpperCase()}? \${signature_lines[0]}\`
      : 'Here’s what we’re doing next:\n1. Clean your damn bathrooms.\n2. Retrain staff.\n3. Promote a happy hour.';
  return res.json({ reply: response });
};