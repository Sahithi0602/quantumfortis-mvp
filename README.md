# QuantumFortis – Automatic Locksmith for the Quantum Era
🔐 Locksmith01 Test
A test project under the **Quantum Fortis** initiative, aiming to create a secure, scalable **Key Vault as a Service (Q-KVaaS)** using AWS CDK, Lambda, API Gateway, and DynamoDB. This repository also includes CI/CD automation using GitHub Actions and an in-progress frontend dashboard.
🧱 Tech Stack
-Language: TypeScript (AWS CDK)
- Cloud: AWS (Lambda, DynamoDB, API Gateway)
- CI/CD: GitHub Actions with OIDC Role
- Frontend: React (WIP under `dashboard/`)
- Infrastructure-as-Code: AWS CDK v2
📁 Project Structure
 
locksmith01-test/
├── infra/               # AWS CDK infrastructure code
│   ├── bin/             # Entry point for CDK app
│   ├── lib/                   # CDK stacks (Lambda, DynamoDB, API Gateway)
│   ├── lambda/            # Lambda function code
│   ├── test/                   # Unit tests
│   ├── package.json      # CDK dependencies
├── dashboard/              # (WIP) Frontend React app
├── .github/workflows/  # CI/CD automation
├── .devcontainer/         # Dev container configuration
├── README.md            # Project documentation
