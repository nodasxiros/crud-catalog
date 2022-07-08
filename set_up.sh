#!/bin/bash
cd api/ && yarn && cp ./.env.example ./.env && cd ..
cd front/ && yarn && cd ..

