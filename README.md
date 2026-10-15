# GitHub Actions CI/CD Pipeline

![Node.js CI/CD Pipeline](https://github.com/dbayode/github-actions-ci-pipeline/actions/workflows/ci.yml/badge.svg?branch=main)

## Project Overview

This project demonstrates a Continuous Integration
and Docker image publishing pipeline using GitHub Actions.

The workflow automatically builds and tests a Node.js
application across multiple runtime versions.

It also performs dependency security checks and builds
a Docker image.

## Technologies Used

- Node.js
- Express.js
- Git
- GitHub
- GitHub Actions
- Docker
- Docker Hub
- Ubuntu Linux
- YAML

## Pipeline Architecture

The pipeline consists of three jobs:

### 1. Build and Test

Runs automated tests using a matrix of:

- Node.js 22
- Node.js 24

### 2. Security Audit

Checks application dependencies for known
high-severity and critical vulnerabilities.

### 3. Docker Build and Push

Builds a Docker image after successful validation.

On the main branch, the image is pushed to Docker Hub.

For pull requests, the image is built but not published.

## Running the Application Locally

Install dependencies:

```bash
npm ci
```

Start the application:

```bash
npm start
```

Run tests:

```bash
npm test
```

## Running with Docker

Build the image:

```bash
docker build -t github-actions-ci-pipeline .
```

Run the container:

```bash
docker run -p 3000:3000 github-actions-ci-pipeline
```

Visit:

http://localhost:3000

## CI/CD Monitoring

Pipeline execution is monitored through GitHub Actions.

The status badge at the top of this README displays
the latest workflow status for the main branch.

## Security

Docker Hub credentials are stored using GitHub
Actions encrypted secrets.

The workflow uses read-only repository permissions.

## Troubleshooting

Failed workflow runs can be investigated using
the GitHub Actions execution logs.

Common issues include:

- Missing dependencies
- Failed automated tests
- Incorrect YAML syntax
- Missing Docker Hub secrets
- Docker build errors
- Dependency vulnerabilities

## Future Improvements

- Container vulnerability scanning
- Automated deployment
- Code coverage reporting
- Branch protection rules
- Release versioning
