import os, json
from google.cloud import pubsub_v1
from google.auth import jwt

 
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = os.getcwd() + "/PubSubService.json" #import pubsub serveice credential json file

# The same for the publisher, except that the "audience" claim needs to be adjusted
# publisher_audience = "https://pubsub.googleapis.com/google.pubsub.v1.Publisher"
subscriber = pubsub_v1.SubscriberClient()
publisher = pubsub_v1.PublisherClient()


def publish_messages(project_id, topic_name):
    """Publishes multiple messages to a Pub/Sub topic."""
    # [START pubsub_quickstart_publisher]
    # [START pubsub_publish]
    project_id = "Your Project Id"
    topic_name = "Your Topic Name"

    publisher = pubsub_v1.PublisherClient()
    # The `topic_path` method creates a fully qualified identifier
    # in the form `projects/{project_id}/topics/{topic_name}`
    topic_path = publisher.topic_path(project_id, topic_name)

    for n in range(1, 10):
        data = u'Message number {}'.format(n)
        # Data must be a bytestring
        data = data.encode('utf-8')
        # When you publish a message, the client returns a future.
        future = publisher.publish(topic_path, data=data)
        print(future.result())

    print('Published messages.')

publish_messages("project_id","topic_name")