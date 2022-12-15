﻿using CleanArchitecture.Application.Common.Interfaces;
using MediatR.Pipeline;
using Microsoft.Extensions.Logging;

namespace CleanArchitecture.Application.Common.Behaviours;

public class LoggingBehaviour<TRequest> : IRequestPreProcessor<TRequest> where TRequest : notnull
{
    private readonly ILogger _logger;

    public LoggingBehaviour(ILogger<TRequest> logger)
    {
        _logger = logger;
    }

    public async Task Process(TRequest request, CancellationToken cancellationToken)
    {
        var requestName = typeof(TRequest).Name;

        //TODO revist this
        var userId = Guid.NewGuid().ToString();
        string? userName = "SYSTEM";


        _logger.LogInformation("CleanArchitecture Request: {Name} {@UserId} {@UserName} {@Request}",
            requestName, userId, userName, request);
    }
}
